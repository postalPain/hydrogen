import React from 'react';
import useStyles from '../SignUp/styles';
import { SafeAreaView, ScrollView, View } from 'react-native';
import {
  Button,
  Input,
  Text,
  withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import { Formik } from 'formik';
import { CreatePasswordSchema } from 'utilities/validationSchemas';
import i18n from 'i18n';
import { ProjectThemeType } from 'theme';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from 'store/user/actions';
import { userErrorSelector } from 'store/user/selectors';
import { DismissKeyboard } from 'components';
import { useResetUserError } from 'utilities/hooks';

interface ICreatePasswordProps {
  theme?: ProjectThemeType;
  route: any;
}

const CreatePassword: React.FC<ICreatePasswordProps> = ({ theme, route }) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const { params: { signupData } } = route;
  const signUpError = useSelector(userErrorSelector);
  const handleConfirmPassword = (values) => {
    dispatch(signUp({ ...signupData, ...values }));
  };
  useResetUserError();

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.container}>
          <Formik
            initialValues={{
              password: '',
              password_confirmation: '',
            }}
            onSubmit={handleConfirmPassword}
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
                    label={i18n.t('screens.signUp.fields.password')}
                    placeholder={i18n.t('screens.signUp.fields.passwordPlaceholder')}
                    value={values.password}
                    secure
                    onChange={handleChange('password')}
                    error={submitCount > 0 ? errors.password : undefined}
                    style={styles.input}
                  />
                  <Input
                    variant="simple"
                    label={i18n.t('screens.signUp.fields.confirmPassword')}
                    placeholder={i18n.t('screens.signUp.fields.confirmPasswordPlaceholder')}
                    value={values.password_confirmation}
                    secure
                    onChange={handleChange('password_confirmation')}
                    error={submitCount > 0 ? errors.password_confirmation : undefined}
                    style={styles.input}
                  />
                  {!!signUpError && <Text color="red">{signUpError}</Text>}
                </View>
                <Button style={styles.button} onPress={handleSubmit}>{i18n.t('screens.signUp.button2')}</Button>
              </View>
            )}
          </Formik>
        </ScrollView>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default withTheme(CreatePassword);
