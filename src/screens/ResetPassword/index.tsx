import React from 'react';
import useStyles from './styles';
import { View } from 'react-native';
import {
  Button,
  Input,
  Text,
  withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import { ResetPasswordSchema } from 'utilities/validationSchemas';
import i18n from 'i18n';
import { Formik } from 'formik';
import { ProjectThemeType } from 'theme';
import { DismissKeyboard } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from 'store/user/actions';
import { userErrorSelector } from 'store/user/selectors';

interface IResetPasswordProps {
  theme?: ProjectThemeType
}

const ResetPassword: React.FC<IResetPasswordProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const resetPasswordError = useSelector(userErrorSelector);

  const handleResetPasswordSubmit = (values) => {
    dispatch(resetPassword(values));
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t('screens.resetPassword.title')}</Text>
        <Text style={styles.description}>{i18n.t('screens.resetPassword.description')}</Text>
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={handleResetPasswordSubmit}
          validationSchema={ResetPasswordSchema}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            submitCount,
          }) => (
            <View style={styles.formContainer}>
              <View>
                <Input
                  variant="simple"
                  label={i18n.t('screens.resetPassword.email')}
                  value={values.email}
                  onChange={handleChange('email')}
                  error={submitCount > 0 ? errors.email : undefined}
                  type="email"
                />
                {!!resetPasswordError && <Text color="red">{resetPasswordError}</Text>}
              </View>
              <Button style={styles.button} onPress={handleSubmit}>{i18n.t('screens.resetPassword.button')}</Button>
            </View>
          )}
        </Formik>
      </View>
    </DismissKeyboard>
  );
};

export default withTheme(ResetPassword);
