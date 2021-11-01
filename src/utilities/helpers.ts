import { AxiosError } from 'axios';

import i18n from 'i18n';
import { TProduct } from 'services/ServerAPI/types';
import { TBasketProduct } from 'store/user/actions';
import { IOrderProduct } from 'store/user/reducers/types';
import { DELIVERY_FEE } from 'constants/';

export const isDateValid = (expirationDate: string) => {
  if (!expirationDate) {
    return false;
  }
  const today = new Date();
  const monthToday = today.getMonth() + 1;
  const yearToday = today
    .getFullYear()
    .toString()
    .substr(-2);

  const [expMonth, expYear] = expirationDate.split('/');

  if (Number(expYear) < Number(yearToday)) {
    return false;
  } else if (
    Number(expMonth) < monthToday
    && Number(expYear) <= Number(yearToday)
  ) {
    return false;
  }

  return true;
};

export const isMonthValid = (expirationDate: string) => {
  if (!expirationDate) {
    return false;
  }
  const [expMonth] = expirationDate.split('/');

  return Number(expMonth) <= 12;
};

export const formatCurrency = (amount: number, { order } = { order: 'straight' }) => {
  const CURRENCY = 'AED';
  const formattedAmount = amount.toFixed(2);

  return order === 'reverse' ? `${CURRENCY} ${formattedAmount}` : `${formattedAmount} ${CURRENCY}`;
};

export const formatAmount = (product: TProduct | IOrderProduct) => {
  if (product.milliliters) {
    return `${product.milliliters} ml`;
  }
  return `${product.weight} g`;
};
export const roundPrice = (n: number) => Math.round(n * 100) / 100;
export const calcProductsPrice = (products) => roundPrice(products.reduce((sum, product) => (
  sum + product.price * product.basketQuantity
), 0));
export const calcProductsTaxes = (products) => roundPrice(products.reduce((sum, product) => (
  sum + product.tax * product.basketQuantity
), 0));
export const getMaxProductCount = (product: TProduct) => (
  product.quantity < product.max_per_order ? product.quantity : product.max_per_order
);
export const getAxiosErrorMessage = (error: AxiosError) => {
  if (!error.response && error.message === 'Network Error') {
    return {
      message: i18n.t('errors.networkError'),
    };
  }
  return error!.response!.data;
};

export const getProductsReceipt = (products, discount = 0) => {
  const subtotal = calcProductsPrice(products);
  const subTotalWithDiscount = subtotal - discount > 0 ? subtotal - discount : 0;
  return {
    subtotal: formatCurrency(subtotal),
    delivery: formatCurrency(DELIVERY_FEE),
    discount: formatCurrency(discount),
    total: formatCurrency(subTotalWithDiscount + DELIVERY_FEE),
    vat: formatCurrency(calcProductsTaxes(products)),
  };
};

export const convertProductsForOrderSubmission = (products: TBasketProduct[]) => products.map(
  item => ({
    uuid: item.uuid,
    quantity: item.basketQuantity,
  }),
);
