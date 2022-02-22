import { AxiosError } from 'axios';

import i18n from 'i18n';
import { TProduct } from 'services/ServerAPI/types';
import { TBasketProduct } from 'store/user/actions';
import { IOrderProduct } from 'store/user/reducers/types';
import { DELIVERY_FEE } from 'constants/';
import { userAPI } from 'services/ServerAPI/serverAPI';

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

export const checkWorkingHours = async (id: string): Promise<{
  worksNow: boolean;
  openAt: null | string;
}> => {
  try {
    const {
      data: {
        works_now: worksNow,
        open_at: openAt,
      },
    } = await userAPI.getWarehouseWorkingHours(id);
    return { worksNow, openAt };
  } catch (e) {
    return { worksNow: true, openAt: null };
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

export const formatPhoneNumber = (value, pattern) => {
  let i = 0;
  const phone = value.toString();
  // eslint-disable-next-line no-plusplus
  return pattern.replace(/#/g, () => phone[i++]);
};

const isToday = (date: Date) => {
  const today = new Date();
  return date.getDate() === today.getDate()
    && date.getMonth() === today.getMonth()
    && date.getFullYear() === today.getFullYear();
};

const isTomorrow = (date: Date) => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return date.getDate() === tomorrow.getDate()
    && date.getMonth() === tomorrow.getMonth()
    && date.getFullYear() === tomorrow.getFullYear();
};

export const getWorkingHoursMessage = (dateTime: string) => {
  const [date, time] = dateTime.split(' ');
  const currentDate = new Date(date.split('-').reverse().join('-'));

  if (isToday(currentDate)) return i18n.t('modals.workingHoursModal.today', { time });
  if (isTomorrow(currentDate)) return i18n.t('modals.workingHoursModal.tomorrow', { time });
  return i18n.t('modals.workingHoursModal.date', { date, time });
};

export const isValidFetchedData = (time: number | null) => (
  time ? (Date.now() - time < 1000 * 60 * 5) : false
);

export const awaitSomeTime = (time: number = 0) => (
  new Promise((resolve) => {
    setTimeout(resolve, time);
  })
);

export const formatAwaitTime = (t: number) => {
  const time = t / 1000;
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const formattedMinutes = minutes > 9 ? minutes : `0${minutes}`;
  const formattedSeconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${formattedMinutes}:${formattedSeconds}`;
};

export const getValueByInterval = (
  callback,
  {
    startValue,
    endValue,
    stepValue,
    stepDuration,
  },
) => {
  const direction = endValue - startValue > 0 ? 1 : -1;
  const deltaValue = Math.abs(endValue - startValue);
  const countSteps = Math.ceil(deltaValue / stepValue);

  const runLooper = (currentStep = 0) => {
    if (currentStep === countSteps) {
      callback(endValue, true);
    } else {
      callback(Math.round(startValue + stepValue * currentStep * direction));
      setTimeout(() => {
        runLooper(currentStep + 1);
      }, stepDuration);
    }
  };
  runLooper();
};
