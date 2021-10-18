import React from 'react';
import useStyles from './styles';
import { ScrollView, View } from 'react-native';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { CheckCircleIcon } from 'components/Icons';
import { ProjectThemeType } from 'theme';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'navigation';
import i18n from 'i18n';

interface IOrderConfirmationProps {
  theme?: ProjectThemeType;
}

const OrderConfirmation: React.FC<IOrderConfirmationProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();

  const handleBrowseProducts = () => navigate(Routes.TabNavigation);
  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={styles.container}>
      <View style={styles.titleContainer}>
        <CheckCircleIcon width={25} height={25} />
        <Text style={styles.success}>{i18n.t('screens.orderConfirmation.success')}</Text>
      </View>
      <View style={styles.paragraph}>
        <Text style={styles.pText}>{i18n.t('screens.orderConfirmation.p1')}</Text>
        <Text style={styles.pText}>{i18n.t('screens.orderConfirmation.p2')}</Text>
      </View>
      <Text style={styles.subTitle}>
        {i18n.t('screens.orderConfirmation.time1')}
        <Text style={styles.time}>{i18n.t('screens.orderConfirmation.time2')}</Text>
      </Text>
      <View style={styles.summary}>
        <Text style={styles.title}>{i18n.t('screens.orderConfirmation.summary')}</Text>
        <View style={styles.infoBlock}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderConfirmation.date')}</Text>
          <Text style={styles.info}>21.09.2021</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderConfirmation.address')}</Text>
          <Text style={styles.info}>Grand Hyatt, Corniche Rd</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderConfirmation.instructions')}</Text>
          <Text style={styles.info}>Please leave at the doorstep and do not ring the bell.</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderConfirmation.cartTotal')}</Text>
          <View style={styles.priceBlock}>
            <Text style={styles.info}>{i18n.t('screens.orderConfirmation.subtotal')}</Text>
            <Text style={styles.price}>AED 48.00</Text>
          </View>
          <View style={styles.priceBlock}>
            <Text style={styles.price}>{i18n.t('screens.orderConfirmation.fee')}</Text>
            <Text style={styles.price}>AED 48.00</Text>
          </View>
          <View style={styles.priceBlock}>
            <Text style={styles.price}>{i18n.t('screens.orderConfirmation.vat')}</Text>
            <Text style={styles.price}>AED 48.00</Text>
          </View>
          <View style={styles.totalBlock}>
            <View style={styles.priceBlock}>
              <Text style={styles.info}>{i18n.t('screens.orderConfirmation.total')}</Text>
              <Text style={styles.info}>AED 48.00</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsBlock}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderConfirmation.details')}</Text>
          <View style={[styles.priceBlock, styles.productPrice]}>
            <View>
              <Text style={styles.price}>Veggies x 2</Text>
              <Text style={styles.price}>750g, Deutschland</Text>
            </View>
            <Text style={styles.info}>AED 48.00</Text>
          </View>
        </View>
      </View>
      <Button onPress={handleBrowseProducts} style={styles.button}>{i18n.t('screens.orderConfirmation.button')}</Button>
    </ScrollView>
  );
};

export default withTheme(OrderConfirmation);
