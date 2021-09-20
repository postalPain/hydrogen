import React from 'react';
import useStyles from './styles';
import { Image, View } from 'react-native';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import masterCard from '../../../assets/images/mc.jpg';
import i18n from 'i18n';

interface IPaymentMethodProps {
  theme?: ProjectThemeType;
  paymentMethod: boolean;
  setPaymentMethod: React.Dispatch<React.SetStateAction<boolean>>
}

const PaymentMethod: React.FC<IPaymentMethodProps> = ({
  theme,
  paymentMethod, setPaymentMethod,
}) => {
  const styles = useStyles(theme);
  return (
    !paymentMethod ? (
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t('components.paymentMethod.title')}</Text>
        <Button
          type="link"
          style={[styles.linkButton, styles.linkButtonMargin]}
          textStyle={styles.linkButtonText}
          onPress={() => setPaymentMethod(true)}
        >
          {i18n.t('components.paymentMethod.addCard')}
        </Button>
      </View>
    )
      : (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{i18n.t('components.paymentMethod.title')}</Text>
            <Button
              type="link"
              style={styles.linkButton}
              textStyle={styles.linkButtonText}
              onPress={() => setPaymentMethod(false)}
            >
              {i18n.t('components.paymentMethod.changeButton')}
            </Button>
          </View>
          <View style={styles.cardContainer}>
            <Image source={masterCard} />
            <Text style={styles.card}>xxxx xxxx xxxx 1659</Text>
          </View>
        </View>
      )
  );
};

export default withTheme(PaymentMethod);
