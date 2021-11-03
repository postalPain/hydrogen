import React from 'react';
import { ScrollView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { useNavigation } from '@react-navigation/native';

import i18n from 'i18n';
import { ProjectThemeType } from 'theme';
import { Routes } from 'navigation';
import { formatCurrency, formatAmount } from 'utilities/helpers';
import { checkoutDataSelector } from 'store/user/selectors';
import { CheckCircleIcon } from 'components/Icons';
import useStyles from './styles';

interface IOrderConfirmationProps {
  theme?: ProjectThemeType;
}

const OrderConfirmation: React.FC<IOrderConfirmationProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();
  const orderData = useSelector(checkoutDataSelector());
  const handleBrowseProducts = () => navigate(Routes.DrawerNavigation);

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
          <Text style={styles.info}>{orderData.created_at}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderConfirmation.address')}</Text>
          <Text style={styles.info}>{orderData.delivery_address.full_address}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderConfirmation.instructions')}</Text>
          <Text style={styles.info}>{orderData.comment}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderConfirmation.cartTotal')}</Text>
          <View style={styles.priceBlock}>
            <Text style={styles.info}>{i18n.t('screens.orderConfirmation.subtotal')}</Text>
            <Text style={styles.price}>{formatCurrency(orderData.sub_total)}</Text>
          </View>
          <View style={styles.priceBlock}>
            <Text style={styles.price}>{i18n.t('screens.orderConfirmation.fee')}</Text>
            <Text style={styles.price}>{formatCurrency(orderData.delivery_fee)}</Text>
          </View>
          <View style={styles.priceBlock}>
            <Text style={styles.price}>{i18n.t('screens.orderConfirmation.vat')}</Text>
            <Text style={styles.price}>{formatCurrency(orderData.tax)}</Text>
          </View>
          <View style={styles.totalBlock}>
            <View style={styles.priceBlock}>
              <Text style={styles.info}>{i18n.t('screens.orderConfirmation.total')}</Text>
              <Text style={styles.info}>{formatCurrency(orderData.total)}</Text>
            </View>
          </View>
        </View>
        <View style={styles.detailsBlock}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderConfirmation.details')}</Text>
          { orderData.products.map((product) => (
            <View style={[styles.priceBlock, styles.productPrice]}>
              <View>
                <Text style={styles.price}>
                  {`${product.name} x ${product.quantity}`}
                </Text>
                <Text style={styles.price}>
                  {`${formatAmount(product)}, ${product.origin}`}
                </Text>
              </View>
              <Text style={styles.info}>{formatCurrency(product.price * product.quantity)}</Text>
            </View>
          ))}
        </View>
      </View>
      <Button onPress={handleBrowseProducts} style={styles.button}>{i18n.t('screens.orderConfirmation.button')}</Button>
    </ScrollView>
  );
};

export default withTheme(OrderConfirmation);
