import React from 'react';
import useStyles from './styles';
import { Image, View } from 'react-native';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import masterCard from '../../../assets/images/mc.jpg';
import visa from '../../../assets/images/visa.png';
import i18n from 'i18n';
import { useSelector } from 'react-redux';

interface IPaymentMethodProps {
  theme?: ProjectThemeType;
  addCard: () => void;
  changeCard: () => void;
}

const PaymentMethod: React.FC<IPaymentMethodProps> = ({
  theme,
  addCard,
  changeCard,
}) => {
  const styles = useStyles(theme);
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const defaultCard = useSelector(state => state.user.defaultCard);
  return (
    !Object.keys(defaultCard).length ? (
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t('components.paymentMethod.title')}</Text>
        <Button
          type="link"
          style={[styles.linkButton, styles.linkButtonMargin]}
          textStyle={styles.linkButtonText}
          onPress={addCard}
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
              onPress={changeCard}
            >
              {i18n.t('components.paymentMethod.changeButton')}
            </Button>
          </View>
          <View style={styles.cardContainer}>
            {defaultCard.brand === 'Visa' ? <Image source={visa} /> : <Image source={masterCard} />}
            <Text style={styles.card}>
              XXXX XXXX XXXX
              {` ${defaultCard.last4}`}
            </Text>
          </View>
        </View>
      )
  );
};

export default withTheme(PaymentMethod);
