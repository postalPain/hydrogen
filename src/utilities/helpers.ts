import { TProduct } from 'services/ServerAPI/types';

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
type TAggregateState = 'solid' | 'liquid';

export const formatCurrency = (amount: number) => `${amount} AED`;
export const formatAmount = (product: TProduct) => {
  if (product.milliliters) {
    return `${product.milliliters} ml`;
  }
  return `${product.weight} g`;
};
