import React from 'react';
import useStyles from './styles';
import { View, SafeAreaView, ScrollView } from 'react-native';
import { Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import { IOrder } from 'store/user/reducers/types';
import { formatAmount, formatCurrency } from 'utilities/helpers';
import i18n from 'i18n';

interface IOrderDetailsProps {
  theme?: ProjectThemeType;
  route: { params: { order: IOrder } };
}

const OrderDetails: React.FC<IOrderDetailsProps> = ({ theme, route }) => {
  const styles = useStyles(theme);
  const { params: { order } } = route;
  const [date] = order.created_at.split(' ');
  const [year, month, day] = date.split('-');

  const renderProducts = () => order.products.map((product) => (
    <View style={styles.productContainer} key={product.uuid}>
      <View>
        <Text style={styles.priceContent}>
          {`${product.name} x ${product.quantity}`}
        </Text>
        <Text style={styles.priceContent}>{`${formatAmount(product)}, ${product.origin}`}</Text>
      </View>
      <Text style={[styles.priceContent, styles.total]}>
        {formatCurrency(product.total, { order: 'reverse' })}
      </Text>
    </View>
  ));

  const renderPromoCodes = () => order.promo_codes.map((code) => (
    <View style={styles.priceContainer} key={code.code}>
      <Text style={styles.priceContent}>{i18n.t('screens.orderDetails.promo')}</Text>
      <Text style={styles.priceContent}>
        -
        {formatCurrency(code.discount, { order: 'reverse' })}
      </Text>
    </View>
  ));

  return (
    <SafeAreaView style={{ ...theme.components.safeArea, backgroundColor: theme.colors.white }}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
        <Text style={styles.title}>{i18n.t('screens.orderDetails.title')}</Text>
        <View style={styles.contentContainer}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderDetails.date')}</Text>
          <Text style={styles.content}>{`${day}.${month}.${year}`}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderDetails.address')}</Text>
          <Text style={styles.content}>{order.delivery_address.full_address}</Text>
        </View>
        {order.comment && (
        <View style={styles.contentContainer}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderDetails.instructions')}</Text>
          <Text style={styles.content}>{order.comment}</Text>
        </View>
        )}
        <View style={styles.contentContainer}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderDetails.cartTotal')}</Text>
          <View style={styles.priceContainer}>
            <Text style={[styles.priceContent, styles.subTotal]}>{i18n.t('screens.orderDetails.subtotal')}</Text>
            <Text style={styles.priceContent}>
              {formatCurrency(order.sub_total, { order: 'reverse' })}
            </Text>
          </View>
          {renderPromoCodes()}
          <View style={styles.priceContainer}>
            <Text style={styles.priceContent}>{i18n.t('screens.orderDetails.fee')}</Text>
            <Text style={styles.priceContent}>
              {formatCurrency(order.delivery_fee, { order: 'reverse' })}
            </Text>
          </View>
          <View style={styles.totalContainer}>
            <View style={styles.priceContainer}>
              <Text style={[styles.priceContent, styles.total]}>{i18n.t('screens.orderDetails.total')}</Text>
              <Text style={[styles.priceContent, styles.total]}>
                {formatCurrency(order.total, { order: 'reverse' })}
              </Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceContent}>{i18n.t('screens.orderDetails.vat')}</Text>
              <Text style={styles.priceContent}>
                {formatCurrency(order.tax, { order: 'reverse' })}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.subTitle}>{i18n.t('screens.orderDetails.details')}</Text>
          {renderProducts()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withTheme(OrderDetails);
