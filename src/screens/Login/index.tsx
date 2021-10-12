import React from 'react';
import useStyles from './styles';
import { View } from 'react-native';
import { Text, Input, Button } from '@stryberventures/stryber-react-native-ui-components';
import { LoginSchema } from 'utilities/validationSchemas';
import i18n from 'i18n';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from 'store/user/actions';
import { userErrorSelector, userToken } from 'store/user/selectors';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'navigation';

interface ILoginProps {

}

const Login: React.FC<ILoginProps> = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const loginError = useSelector(userErrorSelector);
  const token = useSelector(userToken);
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          email: '', password: '',
        }}
        onSubmit={(values) => {
          dispatch(signIn(values));
          if (!loginError && token) {
            navigate(Routes.TabNavigation);
          }
        }}
        validationSchema={LoginSchema}
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
                label={i18n.t('screens.login.email')}
                value={values.email}
                onChange={handleChange('email')}
                error={submitCount > 0 ? errors.email : undefined}
                type="email"
              />
              <Input
                variant="simple"
                label={i18n.t('screens.login.password')}
                value={values.password}
                secure
                onChange={handleChange('password')}
                error={submitCount > 0 ? errors.password : undefined}
                style={styles.input}
              />
              <Button textStyle={styles.link} type="link">{i18n.t('screens.login.forgotPassword')}</Button>
              <Text>{loginError}</Text>
            </View>
            <Button style={styles.button} onPress={handleSubmit}>{i18n.t('screens.login.button')}</Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
