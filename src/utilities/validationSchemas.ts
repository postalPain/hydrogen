import * as Yup from 'yup';
import i18n from 'i18n';
import { isDateValid, isMonthValid } from 'utilities/helpers';

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required(i18n.t('screens.signUp.errors.name')),
  phone: Yup.string().required(i18n.t('screens.signUp.errors.phone')),
  email: Yup.string().email(i18n.t('screens.signUp.errors.email2')).required(i18n.t('screens.signUp.errors.email')),
  password: Yup.string().min(8, i18n.t('screens.signUp.errors.password2')).required(i18n.t('screens.signUp.errors.password')),
});

export const VillaSchema = Yup.object().shape({
  houseNum: Yup.string().required(i18n.t('screens.confirmAddress.errors.house')),
});

export const ApartmentSchema = Yup.object().shape({
  floor: Yup.string().required(i18n.t('screens.confirmAddress.errors.floor')),
  apartmentNum: Yup.string().required(i18n.t('screens.confirmAddress.errors.apartment')),
});

export const CardSchema = Yup.object().shape({
  card: Yup.string().required(i18n.t('components.paymentCardForm.errors.cardRequired')).min(19, i18n.t('components.paymentCardForm.errors.card')),
  expDate: Yup.string()
    .required(i18n.t('components.paymentCardForm.errors.dateRequired'))
    .min(5, i18n.t('components.paymentCardForm.errors.date'))
    .test(
      'test-credit-card-expiration-date',
      i18n.t('components.paymentCardForm.errors.date'),
      isDateValid,
    )
    .test(
      'test-credit-card-expiration-date',
      i18n.t('components.paymentCardForm.errors.date'),
      isMonthValid,
    ),
  cvc: Yup.string().required(i18n.t(i18n.t('components.paymentCardForm.errors.cvcRequired'))).min(3, i18n.t('components.paymentCardForm.errors.cvc')),
});
