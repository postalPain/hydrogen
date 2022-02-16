import React, { useState } from 'react';
import useStyles from './styles';
import {
  View, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Dimensions,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {
  Button,
  withTheme,
  Text,
} from '@stryberventures/stryber-react-native-ui-components';
import { Formik } from 'formik';
import i18n from 'i18n';
import { SignUpOTPSchema } from 'utilities/validationSchemas';
import { ProjectThemeType } from 'theme';
import { Routes } from 'navigation';
import { useNavigation } from '@react-navigation/native';
import { DismissKeyboard } from 'components';
import { CommentCheckIcon } from 'components/Icons';
import { HEADER_HEIGHT } from 'constants/';

interface SignUpOTPProps {
  theme: ProjectThemeType;
  route: any;
}

const { height } = Dimensions.get('window');

const SignUpOTP: React.FC<SignUpOTPProps> = ({ theme, route }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();
  const [phoneNum, setPhoneNum] = useState('');

  const handleOTPSubmit = () => {
    // @ts-ignore
    navigate(Routes.SignUpOTPVerification, {
      signupData: { ...route.params.signupData, phone: phoneNum },
    });
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView keyboardVerticalOffset={HEADER_HEIGHT} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.flexStyle}>
          <ScrollView
            style={styles.flexStyle}
            contentContainerStyle={{
              minHeight: height - HEADER_HEIGHT - (Platform.OS === 'ios' ? 20 : 0),
              ...styles.container,
            }}
          >
            <View style={styles.pageIconContainer}>
              <CommentCheckIcon />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.pageHeader}>{i18n.t('screens.signUpOTP.pageHeader')}</Text>
              <Text style={styles.pageSubHeader}>{i18n.t('screens.signUpOTP.pageSubHeader')}</Text>
            </View>

            <View onStartShouldSetResponder={() => true} style={styles.formWrapper}>
              <Formik
                initialValues={{
                  phone: '',
                }}
                onSubmit={handleOTPSubmit}
                validationSchema={SignUpOTPSchema}
              >
                {({
                  handleChange,
                  handleSubmit,
                  errors,
                  submitCount,
                }) => {
                  const isPhoneError = submitCount > 0 && errors.phone;

                  return (
                    <View style={styles.formContainer}>
                      <View>
                        <View style={styles.input}>
                          <Text
                            size={16}
                            color={isPhoneError ? '#EA3546' : '#4C4C4C'}
                          >
                            {i18n.t('screens.signUpOTP.fields.phone')}
                          </Text>
                          <PhoneInput
                            defaultCode="AE"
                            layout="first"
                            placeholder="55 205 2776"
                            onChangeText={handleChange('phone')}
                            onChangeFormattedText={(val) => setPhoneNum(val)}
                            containerStyle={[styles.phoneContainer, {
                              borderColor: isPhoneError ? '#EA3546' : '#ccc',
                            }]}
                            textContainerStyle={styles.phoneInput}
                          />
                          {submitCount > 0 && (
                            <Text style={styles.phoneError}>{errors.phone}</Text>
                          )}
                        </View>
                      </View>
                      <Button
                        style={styles.button}
                        onPress={handleSubmit}
                      >
                        {i18n.t('screens.signUpOTP.button')}
                      </Button>
                    </View>
                  );
                }}
              </Formik>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default withTheme(SignUpOTP);
