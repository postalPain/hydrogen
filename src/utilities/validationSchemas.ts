import * as Yup from 'yup';
import i18n from 'i18n';
import { isDateValid, isMonthValid } from 'utilities/helpers';

export const SignUpSchema = Yup.object().shape({
  first_name: Yup.string()
    .required(i18n.t('screens.signUp.errors.name'))
    .min(3, i18n.t('screens.signUp.errors.smallName')),
  last_name: Yup.string()
    .required(i18n.t('screens.signUp.errors.lastName'))
    .min(3, i18n.t('screens.signUp.errors.smallLastName')),
  email: Yup.string().email(i18n.t('screens.signUp.errors.email2')).required(i18n.t('screens.signUp.errors.email')),
});

export const SignUpOTPSchema = Yup.object().shape({
  phone: Yup.string().required(i18n.t('screens.signUp.errors.phone')),
});

export const CreatePasswordSchema = Yup.object().shape({
  password: Yup.string().matches(/^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/, i18n.t('screens.signUp.errors.password2')).required(i18n.t('screens.signUp.errors.password')),
  password_confirmation: Yup.string()
    // eslint-disable-next-line func-names
    .test('passwords-match', i18n.t('screens.signUp.errors.confirmPassword'), function (value) {
      return this.parent.password === value;
    }),
});

export const VillaSchema = Yup.object().shape({
  building_name: Yup.string().trim().required(i18n.t('screens.confirmAddress.errors.buildingName')),
  house_number: Yup.string().trim().required(i18n.t('screens.confirmAddress.errors.house')),
});

export const ApartmentSchema = Yup.object().shape({
  building_name: Yup.string().trim().required(i18n.t('screens.confirmAddress.errors.buildingName')),
  floor: Yup.string().trim().required(i18n.t('screens.confirmAddress.errors.floor')),
  apartment_number: Yup.string().trim().required(i18n.t('screens.confirmAddress.errors.apartment')),
});

export const OfficeSchema = Yup.object().shape({
  building_name: Yup.string().trim().required(i18n.t('screens.confirmAddress.errors.buildingName')),
  floor: Yup.string().trim().required(i18n.t('screens.confirmAddress.errors.floor')),
  company_name: Yup.string().trim().required(i18n.t('screens.confirmAddress.errors.companyName')),
});


export const CardSchema = Yup.object().shape({
  card: Yup.string().required(i18n.t('components.paymentCardForm.errors.cardRequired')).min(16, i18n.t('components.paymentCardForm.errors.card')),
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

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email(i18n.t('screens.signUp.errors.email2')).required(i18n.t('screens.signUp.errors.email')),
  password: Yup.string().required(i18n.t('screens.signUp.errors.password')),
});

export const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email(i18n.t('screens.signUp.errors.email2')).required(i18n.t('screens.signUp.errors.email')),
});
