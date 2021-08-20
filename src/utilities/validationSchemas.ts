import * as Yup from 'yup';
import i18n from 'i18n';

export const SignUpSchema = Yup.object().shape({
  name: Yup.string().required(i18n.t('screens.signUp.errors.name')),
  phone: Yup.string().required(i18n.t('screens.signUp.errors.phone')),
  email: Yup.string().email(i18n.t('screens.signUp.errors.email2')).required(i18n.t('screens.signUp.errors.email')),
  password: Yup.string().min(8, i18n.t('screens.signUp.errors.password2')).required(i18n.t('screens.signUp.errors.password')),
});
