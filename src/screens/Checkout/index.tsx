import React, { useState } from 'react';
import useStyles from './styles';
import { View, TextInput, ScrollView } from 'react-native';
import {
  Text, Input, Button, withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import { GeoPoint, LeftArrow } from 'components/Icons';
import { ProjectThemeType } from 'theme';
import { PaymentMethod } from 'components';
import i18n from 'i18n';

interface ICheckoutProps {
  theme: ProjectThemeType
}

const Checkout: React.FC<ICheckoutProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const [paymentMethod, setPaymentMethod] = useState(false);
  return (
    <ScrollView style={styles.container}>
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
        <Input label={i18n.t('screens.checkout.instructionsLabel')} multiline />
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
        <PaymentMethod paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
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
          textStyle={!paymentMethod && styles.disabledButtonText}
          disabled={!paymentMethod}
        >
          {i18n.t('screens.checkout.submit')}
        </Button>
      </View>
    </ScrollView>
  );
};

export default withTheme(Checkout);
