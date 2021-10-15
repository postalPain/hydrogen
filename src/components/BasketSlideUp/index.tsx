import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  Text, CacheImage, withTheme, ButtonCounter, Button,
} from '@stryberventures/stryber-react-native-ui-components';
import { useDispatch, useSelector } from 'react-redux';

import i18n from 'i18n';
import { ProjectThemeType } from 'styles/theme';
import { DELIVERY_FEE } from 'constants/';
import { formatCurrency, formatAmount, calcProductsPrice } from 'utilities/helpers';
import { appBasketVisibilitySelector } from 'store/app/selectors';
import { setBasketVisibility } from 'store/app/actions';
import { setProductToBasket } from 'store/user/actions';
import { basketSelector } from 'store/user/selectors';
import { SlideUp } from 'components';
import useStyles from './styles';


interface IBasketSlideUpProps {
  theme?: ProjectThemeType;
}

const BasketSlideUp: React.FC<IBasketSlideUpProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const visible = useSelector(appBasketVisibilitySelector);
  const basket = useSelector(basketSelector());
  const products = Object.values(basket);
  const dispatch = useDispatch();
  const onCountButtonChange = (data, count) => {
    dispatch(setProductToBasket({
      ...data,
      quantity: count,
    }));
  };
  const onSlideUpClose = () => {
    dispatch(setBasketVisibility(false));
  };

  const renderProducts = () => (
    products.map(product => (
      <View style={styles.inventoryItem} key={product.uuid}>
        <View style={styles.inventoryImageContainer}>
          <CacheImage
            source={{ uri: product.image_url }}
            style={styles.inventoryImage}
          />
        </View>
        <View style={styles.inventoryContent}>
          <Text style={[styles.inventoryText, styles.p]}>
            {`${product.name}${product.pieces ? (` (${product.pieces} ${i18n.t('components.basketSlideUp.pieces')})`) : ''}`}
          </Text>
          <Text style={[styles.inventoryText, styles.p]}>
            {`${formatAmount(product)}, ${product.origin}`}
          </Text>
          <View style={styles.inventoryPanel}>
            <View style={styles.inventoryPriceCol}>
              <Text style={styles.priceText}>{formatCurrency(product.price)}</Text>
            </View>
            <ButtonCounter
              style={styles.addToCartButtonCounter}
              initialValue={product.quantity}
              size="mini"
              color={theme.colors.yellow}
              onCountChange={(count) => onCountButtonChange(product, count)}
            />
          </View>
        </View>
      </View>
    ))
  );
  const renderEmptyList = () => (
    <Text style={styles.emptyList}>{i18n.t('components.basketSlideUp.emptyList')}</Text>
  );

  return (
    <SlideUp
      visible={visible}
      renderWrapper={(content) => {
        if (!products.length) {
          return content;
        }
        return (
          <View style={styles.wrapperBox}>
            {content}
            <View style={styles.totalBlock}>
              <View style={styles.totalBlockLeftCol}>
                <Text style={[styles.textSmall, styles.p]}>
                  {`${products.length} ${i18n.t('components.basketSlideUp.items')} + ${formatCurrency(DELIVERY_FEE)} ${i18n.t('components.basketSlideUp.deliveryFee')}`}
                </Text>
                <Text style={[styles.totalPrice, styles.p]}>
                  {formatCurrency(calcProductsPrice(products) + DELIVERY_FEE)}
                </Text>
              </View>
              <View style={styles.totalBlockRightCol}>
                <Button size="small" textStyle={styles.buttonTextCheckout}>
                  {i18n.t('components.basketSlideUp.checkout')}
                </Button>
              </View>
            </View>
          </View>
        );
      }}
      containerStyle={styles.wrapperBoxContainer}
      contentStyle={styles.wrapperBoxContent}
      onClose={onSlideUpClose}
    >
      <Text style={styles.header}>{i18n.t('components.basketSlideUp.header')}</Text>
      <ScrollView style={styles.scrollBox}>
        <View onStartShouldSetResponder={() => true}>
          { products.length && renderProducts() || renderEmptyList()}
        </View>
      </ScrollView>
    </SlideUp>
  );
};

export default withTheme(BasketSlideUp);
