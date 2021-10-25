import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, TextInput, ScrollView } from 'react-native';
import {
  Text, Input, Button, withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import BottomSheet from '@gorhom/bottom-sheet';
import { useNavigation } from '@react-navigation/native';

import i18n from 'i18n';
import { ProjectThemeType } from 'theme';
import Routes from 'navigation/Routes';
import {
  ChangePaymentMethod,
  ModalOverlay,
  PaymentCardForm,
  PaymentMethod,
  OutOfStockSlideUp,
  CardVariant,
} from 'components';
import { GeoPoint, LeftArrow } from 'components/Icons';
import useStyles from './styles';


interface ICheckoutProps {
  theme: ProjectThemeType;
}

const Checkout: React.FC<ICheckoutProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const navigator = useNavigation();
  const addCardModalRef = useRef<BottomSheet>(null);
  const changeCardModalRef = useRef<BottomSheet>(null);
  const cardVariantModalRef = useRef<BottomSheet>(null);
  const scrollViewRef = useRef<ScrollView>(null);
  const scrollToTheBottom = () => scrollViewRef.current.scrollToEnd();
  const handleOpenPaymentCardModal = () => {
    addCardModalRef.current.expand();
    scrollToTheBottom();
  };
  const handleOpenChangeCard = () => {
    changeCardModalRef.current.expand();
    scrollToTheBottom();
  };
  const handleOpenCardVariant = () => {
    cardVariantModalRef.current.expand();
    scrollToTheBottom();
  };
  const handleClosePaymentCardModal = () => addCardModalRef.current.close();
  const handleCloseChangeCard = () => changeCardModalRef.current.close();
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const defaultCard = useSelector(state => state.user.defaultCard);
  const isDefaultCard = !!Object.keys(defaultCard).length;
  const [outOfStockSlideUpVisible, setOutOfStockSlideUpVisible] = useState(false);

  // Fix issue on android, see: https://github.com/gorhom/react-native-bottom-sheet/issues/642
  useEffect(() => {
    setTimeout(() => {
      handleClosePaymentCardModal();
      handleCloseChangeCard();
    }, 400);
  }, []);

  const onCheckoutPress = () => {
    // TODO add submit order to server logic
    // add set out of stock products to the store
    setOutOfStockSlideUpVisible(true);
  };
  const onCartUpdate = () => {
    setOutOfStockSlideUpVisible(false);
    // @ts-ignore
    navigator.navigate(Routes.Basket, { updated: true });
  };

  return (
    <>
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
      >
        <View style={styles.contentWrapper}>
          <Text style={styles.title}>
            {i18n.t('screens.checkout.deliveryDetails')}
          </Text>
          <Input
            label={i18n.t('screens.checkout.addressLabel')}
            value="Address here"
            disabled
            icon={() => <GeoPoint />}
            style={styles.input}
            inputLabelStyle={styles.label}
          />
          <Input label={i18n.t('screens.checkout.instructionsLabel')} multiline maxLength={250} />
          <View style={styles.couponContainer}>
            <TextInput placeholder={i18n.t('screens.checkout.couponPlaceholder')} style={styles.couponField} />
            <Button
              style={styles.couponButton}
              textStyle={styles.couponButtonText}
            >
              {i18n.t('screens.checkout.couponButton')}
              {'   '}
              <LeftArrow />
            </Button>
          </View>
          <PaymentMethod
            addCard={handleOpenPaymentCardModal}
            changeCard={handleOpenChangeCard}
          />
          <Text style={styles.title}>
            {i18n.t('screens.checkout.cartTotal')}
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText} semibold size={14}>{i18n.t('screens.checkout.subtotal')}</Text>
            <Text style={styles.priceText} bold>AED 54.00</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{i18n.t('screens.checkout.fee')}</Text>
            <Text style={styles.priceText}>AED 54.00</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>{i18n.t('screens.checkout.vat')}</Text>
            <Text style={styles.priceText}>AED 54.00</Text>
          </View>
          <View style={[styles.priceContainer, styles.totalContainer]}>
            <Text style={[styles.priceText, styles.priceTotal]}>
              {i18n.t('screens.checkout.total')}
            </Text>
            <Text style={[styles.priceText, styles.priceTotal]}>
              AED 54.00
            </Text>
          </View>
          <Button
            style={styles.button}
            textStyle={!isDefaultCard && styles.disabledButtonText}
            disabled={!isDefaultCard}
            onPress={onCheckoutPress}
          >
            {i18n.t('screens.checkout.submit')}
          </Button>
        </View>
      </ScrollView>
      <ModalOverlay height="75%" ref={addCardModalRef}>
        <PaymentCardForm />
      </ModalOverlay>
      <ModalOverlay height="45%" ref={changeCardModalRef}>
        <ChangePaymentMethod
          addCard={handleOpenPaymentCardModal}
          changeCard={handleOpenCardVariant}
        />
      </ModalOverlay>
      <ModalOverlay height="60%" ref={cardVariantModalRef}>
        <CardVariant />
      </ModalOverlay>
      <OutOfStockSlideUp
        visible={outOfStockSlideUpVisible}
        onCartUpdate={onCartUpdate}
        products={[]}
      />
    </>
  );
};

export default withTheme(Checkout);
