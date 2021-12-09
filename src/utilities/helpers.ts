import { AxiosError } from 'axios';

import i18n from 'i18n';
import { TProduct } from 'services/ServerAPI/types';
import { TBasketProduct } from 'store/user/actions';
import { IOrderProduct } from 'store/user/reducers/types';
import { DELIVERY_FEE } from 'constants/';
import { userAPI } from 'services/ServerAPI/serverAPI';
import { setupAppsFlyer } from 'services/AppsFlyer';
import { setupSegment } from 'services/Segment';

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
  return product.weight ? `${product.weight} g` : null;
};
export const checkHasProductAmount = (product: TProduct | IOrderProduct) => (
  !!product.milliliters || !!product.weight
);
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
    uuid: item.product_uuid,
    quantity: item.basketQuantity,
  }),
);

export const getCleanObject = (obj) => Object.keys(obj).reduce((prevCleanObj, key) => {
  const cleanObj = { ...prevCleanObj };
  if (obj[key]) {
    const isArray = Array.isArray(obj[key]);
    const isObject = (typeof obj[key]).toLowerCase() === 'object' && !isArray;

    cleanObj[key] = isObject
      ? getCleanObject(obj[key])
      : obj[key];
  }
  return cleanObj;
}, {});

export const checkWorkingHours = async (): Promise<boolean> => {
  try {
    const { data: { data } } = await userAPI.getAppOptions();
    return data?.works_now;
  } catch (e) {
    return true;
  }
};

export const checkoutErrorHandler = (error: string) => {
  if (!error) return '';
  if (error.includes('Your card was declined')) return '';
  if (error.includes('delivery address field is required')) return i18n.t('errors.deliveryAddress');
  return error;
};

export const processCategoryProductsForRender = (subcategories) => subcategories.reduce(
  (listItems, subcategory) => {
    const { inventories, ...subcategoryProps } = subcategory;
    const updatedListItems = [...listItems, {
      ...subcategoryProps,
      type: 'header',
      key: subcategoryProps.uuid,
    }];
    const rowLength = 3;
    const countRows = Math.ceil(inventories.length / rowLength);
    for (let i = 0; i < countRows; i++) {
      const listItemData = inventories.slice(i * rowLength, (i + 1) * rowLength);
      updatedListItems.push({
        type: 'row',
        listItemData,
        key: `${subcategoryProps.uuid}-${i}`,
      });
    }
    return updatedListItems;
  }, [],
);

export const setupTracking = async () => {
  // Enable segment tracking
  await setupSegment();

  // Enable AppsFlyer tracking
  await setupAppsFlyer();
};
