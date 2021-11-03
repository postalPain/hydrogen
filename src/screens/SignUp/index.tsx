import React from 'react';
import useStyles from './styles';
import {
  View, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Dimensions,
} from 'react-native';
import {
  Input,
  Button,
  withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import { Formik } from 'formik';
import i18n from 'i18n';
import { SignUpSchema } from 'utilities/validationSchemas';
import { ProjectThemeType } from 'theme';
import { Routes } from 'navigation';
import { useNavigation } from '@react-navigation/native';
import { DismissKeyboard } from 'components';
import { HEADER_AND_TAB_BAR_HEIGHT } from '../../constants';

interface ISignUpProps {
  theme: ProjectThemeType
}

const { height } = Dimensions.get('window');

const SignUp: React.FC<ISignUpProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();

  const handleSignUp = (userInfo) => navigate(Routes.CreatePassword, { signupData: userInfo });

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView keyboardVerticalOffset={HEADER_AND_TAB_BAR_HEIGHT} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flexStyle}>
          <ScrollView
            style={styles.flexStyle}
            contentContainerStyle={{
              minHeight: height - HEADER_AND_TAB_BAR_HEIGHT,
              ...styles.container,
            }}
          >
            <Formik
              initialValues={{
                first_name: '', last_name: '', phone: '', email: '',
              }}
              onSubmit={handleSignUp}
              validationSchema={SignUpSchema}
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
                    <View style={styles.nameContainer}>
                      <Input
                        variant="simple"
                        label={i18n.t('screens.signUp.fields.name')}
                        value={values.first_name}
                        onChange={handleChange('first_name')}
                        error={submitCount > 0 ? errors.first_name : undefined}
                        style={[styles.nameInput, styles.firstName]}
                      />
                      <Input
                        variant="simple"
                        label={i18n.t('screens.signUp.fields.lastName')}
                        value={values.last_name}
                        onChange={handleChange('last_name')}
                        error={submitCount > 0 ? errors.last_name : undefined}
                        style={[styles.nameInput, styles.lastName]}
                      />
                    </View>
                    <Input
                      variant="simple"
                      label={i18n.t('screens.signUp.fields.phone')}
                      value={values.phone}
                      onChange={handleChange('phone')}
                      error={submitCount > 0 ? errors.phone : undefined}
                      type="phone"
                      style={styles.input}
                    />
                    <Input
                      variant="simple"
                      label={i18n.t('screens.signUp.fields.email')}
                      value={values.email}
                      onChange={handleChange('email')}
                      error={submitCount > 0 ? errors.email : undefined}
                      type="email"
                      style={styles.input}
                    />
                    <Button
                      type="link"
                      style={styles.input}
                      textStyle={styles.link}
                      onPress={() => navigate(Routes.Login)}
                    >
                      {i18n.t('screens.signUp.loginButton')}
                    </Button>
                  </View>
                  <Button style={styles.button} onPress={handleSubmit}>{i18n.t('screens.signUp.button')}</Button>
                </View>
              )}
            </Formik>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default withTheme(SignUp);
