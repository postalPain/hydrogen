import React, { useEffect } from 'react';
import useStyles from './styles';
import { View, ScrollView } from 'react-native';
import { Text, withTheme, Card } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import { ArrowCircle, CheckCircleIcon, Checkout } from 'components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from 'store/user/actions';
import { orderListSelector } from 'store/user/selectors';
import { IOrder } from 'store/user/reducers/types';
import i18n from 'i18n';

interface IOrderListProps {
  theme: ProjectThemeType;
}

type CheckOrderType = {
  color: string;
  IconComponent: null | React.ReactNode;
  text: string;
};

const checkOrderStatus = (order: IOrder): CheckOrderType => {
  switch (order.status) {
    case 'cancelled':
      return {
        color: 'red',
        IconComponent: null,
        text: i18n.t('screens.orderList.cancelled'),
      };
    case 'delivered':
      return {
        color: '#B4BC48',
        IconComponent: <CheckCircleIcon width={25} height={25} />,
        text: i18n.t('screens.orderList.delivered'),
      };
    default:
      return {
        color: '#FDA717',
        IconComponent: <ArrowCircle />,
        text: i18n.t('screens.orderList.pending'),
      };
  }
};

const OrderList: React.FC<IOrderListProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const orderList = useSelector(orderListSelector);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const renderNoOrders = () => (
    <View style={styles.noOrderContainer}>
      <View style={styles.bagIcon}>
        <Checkout width={35} height={40} />
      </View>
      <Text style={styles.message}>No orders yet!</Text>
    </View>
  );

  const renderOrderList = () => orderList.map((order: IOrder) => {
    const { color, IconComponent, text } = checkOrderStatus(order);
    const [date, time] = order.created_at.split(' ');
    const [, month, day] = date.split('-');
    const [hours, minutes] = time.split(':');

    return (
      <Card shadow style={styles.card} key={order.uuid}>
        <View>
          <Text style={styles.subTitle}>{order.delivery_address.full_address}</Text>
          <Text style={styles.content}>{`${day}.${month}, ${hours}:${minutes}`}</Text>
          <Text style={styles.content}>
            #
            {order.uuid.slice(-4).toUpperCase()}
          </Text>
        </View>
        <View style={styles.statusContainer}>
          {IconComponent}
          <Text style={[styles.status, { color }]}>{text}</Text>
        </View>
      </Card>
    );
  });

  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.container}>
      <Text style={styles.title}>{i18n.t('screens.orderList.title')}</Text>
      {orderList.length ? renderOrderList() : renderNoOrders()}
    </ScrollView>
  );
};

export default withTheme(OrderList);
