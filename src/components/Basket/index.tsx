import React, { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import {
  Text, CacheImage, withTheme, ButtonCounter, Button,
} from '@stryberventures/stryber-react-native-ui-components';
import { useDispatch, useSelector } from 'react-redux';

import i18n from 'i18n';
import { ProjectThemeType } from 'styles/theme';
import { Routes } from 'navigation';
import { navigate } from 'navigation/NavigationUtilities';
import { DELIVERY_FEE } from 'constants/';
import {
  formatCurrency,
  formatAmount,
  calcProductsPrice,
  roundPrice,
  getMaxProductCount,
  checkWorkingHours,
  checkHasProductAmount, getWorkingHoursMessage,
} from 'utilities/helpers';
import { setProductToBasket } from 'store/user/actions';
import { basketSelector, basketLengthSelector, userSelector } from 'store/user/selectors';
import { CartIcon, CheckCircleIcon } from 'components/Icons';
import useStyles from './styles';
import { trackEvent, TrackingEvent } from 'utilities/eventTracking';
import { warehouseIdSelector } from 'store/warehouse/selectors';
import { ModalContext, ModalType } from 'components/ModalProvider';


interface IBasketProps {
  theme?: ProjectThemeType;
  updated?: boolean;
}

const Basket: React.FC<IBasketProps> = ({ theme, updated }) => {
  const styles = useStyles(theme);
  const basket = useSelector(basketSelector());
  const products = Object.values(basket);
  const basketLength = useSelector(basketLengthSelector());
  const user = useSelector(userSelector);
  const warehouseId = useSelector(warehouseIdSelector);
  const isRegisteredUser = user?.email;
  const dispatch = useDispatch();
  const { setModalData } = useContext(ModalContext);

  const onCountButtonChange = (data, count) => {
    dispatch(setProductToBasket({
      ...data,
      basketQuantity: count,
    }));
  };
  const onExploreButtonPress = () => {
    navigate(Routes.HomeTabScreen, {
      screen: Routes.HomeScreen,
    });
  };
  const onCheckoutPress = async () => {
    const { worksNow, openAt } = await checkWorkingHours(warehouseId);
    if (!worksNow) {
      setModalData({
        layout: ModalType.default,
        title: i18n.t('modals.workingHoursModal.title'),
        description: getWorkingHoursMessage(openAt),
      });
    } else if (!isRegisteredUser) {
      navigate(Routes.SignUp);
    } else {
      navigate(Routes.Checkout);
      trackEvent(TrackingEvent.CheckoutStarted);
    }
  };

  const renderSuccessUpdateBlock = () => (
    <View style={styles.successBlock}>
      <View style={styles.successHeaderSection}>
        <CheckCircleIcon
          width={25}
          height={25}
        />
        <Text style={styles.successUpdateHeader}>
          {i18n.t('components.basket.successHeader')}
        </Text>
      </View>
      <Text style={styles.successUpdateText}>
        {i18n.t('components.basket.successText')}
      </Text>
    </View>
  );

  const renderFullBasket = () => (
    <View style={styles.fullBlock}>
      <View style={styles.fullContent}>
        <Text style={styles.header}>{i18n.t('components.basket.header')}</Text>
        { updated && renderSuccessUpdateBlock()}
        <ScrollView style={styles.scrollBox} contentContainerStyle={styles.scrollBoxContent}>
          { products.map(product => (
            <View style={styles.inventoryItem} key={product.uuid}>
              <View style={styles.inventoryImageContainer}>
                <CacheImage
                  source={{ uri: product.image_url }}
                  style={styles.inventoryImage}
                />
              </View>
              <View style={styles.inventoryContent}>
                <Text style={[styles.inventoryName, styles.p]}>
                  {`${product.name}${product.pieces ? (` (${product.pieces} ${i18n.t('components.basket.pieces')})`) : ''}`}
                </Text>
                <Text style={[styles.inventoryText, styles.p]}>
                  {checkHasProductAmount(product) ? `${formatAmount(product)}, ${product.origin}` : product.origin}
                </Text>
                <View style={styles.inventoryPanel}>
                  <View style={styles.inventoryPriceCol}>
                    <Text style={styles.priceText}>
                      {formatCurrency(roundPrice(product.price * product.basketQuantity))}
                    </Text>
                  </View>
                  <ButtonCounter
                    style={styles.addToCartButtonCounter}
                    initialValue={product.basketQuantity}
                    maxValue={getMaxProductCount(product)}
                    size="mini"
                    color={theme.colors.yellow}
                    secondaryColor={theme.colors.black}
                    onCountChange={(count) => onCountButtonChange(product, count)}
                  />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.totalBlock}>
        <View style={styles.totalBlockLeftCol}>
          <Text style={styles.textSmall}>
            {`${basketLength} ${i18n.t('components.basket.items')} + ${formatCurrency(DELIVERY_FEE)} ${i18n.t('components.basket.deliveryFee')}`}
          </Text>
          <Text style={styles.totalPrice}>
            {formatCurrency(calcProductsPrice(products) + DELIVERY_FEE)}
          </Text>
        </View>
        <View style={styles.totalBlockRightCol}>
          <Button
            size="small"
            style={styles.buttonCheckout}
            textStyle={styles.buttonTextCheckout}
            onPress={onCheckoutPress}
          >
            {i18n.t('components.basket.checkout')}
          </Button>
        </View>
      </View>
    </View>
  );
  const renderEmptyBasket = () => (
    <View style={styles.emptyBlock}>
      <Text style={styles.header}>{i18n.t('components.basket.header')}</Text>
      <View style={styles.emptyBlockContent}>
        <View style={styles.cartIconContainer}>
          <CartIcon />
        </View>
        <Text style={styles.emptyList}>{i18n.t('components.basket.emptyList')}</Text>
      </View>
      <View style={styles.emptyBlockPanel}>
        <Button
          style={styles.exploreButton}
          onPress={onExploreButtonPress}
        >
          {i18n.t('components.basket.exploreButton')}
        </Button>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      { basketLength ? renderFullBasket() : renderEmptyBasket() }
    </View>
  );
};

export default withTheme(Basket);
