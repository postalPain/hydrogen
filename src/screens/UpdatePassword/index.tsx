import React from 'react';
import useStyles from './styles';
import { View } from 'react-native';
import {
  Button,
  Input,
  Text,
  withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import i18n from 'i18n';
import { CreatePasswordSchema } from 'utilities/validationSchemas';
import { Formik } from 'formik';
import { ProjectThemeType } from 'theme';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'navigation';
import { DismissKeyboard } from 'components';

interface IUpdatePasswordProps {
  theme?: ProjectThemeType;
}

const UpdatePassword: React.FC<IUpdatePasswordProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();

  const handleUpdatePassword = (values) => {
    console.log(values);
    navigate(Routes.ResetPasswordSuccess);
  };
  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.title}>{i18n.t('screens.updatePassword.title')}</Text>
        <Text style={styles.description}>{i18n.t('screens.updatePassword.description')}</Text>
        <Text style={styles.description}>{i18n.t('screens.updatePassword.description2')}</Text>
        <Formik
          initialValues={{
            password: '',
            password_confirmation: '',
          }}
          onSubmit={handleUpdatePassword}
          validationSchema={CreatePasswordSchema}
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
                  label={i18n.t('screens.updatePassword.password')}
                  value={values.password}
                  secure
                  onChange={handleChange('password')}
                  error={submitCount > 0 ? errors.password : undefined}
                  style={styles.input}
                />
                <Input
                  variant="simple"
                  label={i18n.t('screens.updatePassword.confirmPassword')}
                  value={values.password_confirmation}
                  secure
                  onChange={handleChange('password_confirmation')}
                  error={submitCount > 0 ? errors.password_confirmation : undefined}
                  style={styles.input}
                />
              </View>
              <Button style={styles.button} onPress={handleSubmit}>{i18n.t('screens.updatePassword.button')}</Button>
            </View>
          )}
        </Formik>
      </View>
    </DismissKeyboard>
  );
};

export default withTheme(UpdatePassword);
