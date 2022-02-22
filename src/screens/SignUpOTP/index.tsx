import React, { useState, useEffect } from 'react';
import {
  View, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PhoneInput from 'react-native-phone-number-input';
import {
  Button,
  withTheme,
  Text,
} from '@stryberventures/stryber-react-native-ui-components';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';

import i18n from 'i18n';
import { HEADER_HEIGHT } from 'constants/';
import { SignUpOTPSchema } from 'utilities/validationSchemas';
import { ProjectThemeType } from 'theme';
import { RootStackParamList } from 'navigation/types';
import { Routes } from 'navigation';
import {
  requestPhoneVerificationClear,
  requestPhoneVerification,
} from 'store/user/actions';
import {
  requestPhoneVerificationLoadingSelector,
  requestPhoneVerificationDataSelector,
  requestPhoneVerificationErrorSelector,
} from 'store/user/selectors';
import { CommentCheckIcon } from 'components/Icons';
import { DismissKeyboard, LoadingScreen } from 'components';
import useStyles from './styles';

interface SignUpOTPProps {
  theme: ProjectThemeType;
  route: RouteProp<RootStackParamList, Routes.SignUpOTP>;
}

const { height } = Dimensions.get('window');

const SignUpOTP: React.FC<SignUpOTPProps> = ({ theme, route }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [phoneNum, setPhoneNum] = useState('');
  const data = useSelector(requestPhoneVerificationDataSelector());
  const isLoading = useSelector(requestPhoneVerificationLoadingSelector());
  const errorMessage = useSelector(requestPhoneVerificationErrorSelector());

  useEffect(() => {
    if (data) {
      navigate(Routes.SignUpOTPVerification, {
        signupData: { ...route.params.signupData, phone: phoneNum },
      });
      dispatch(requestPhoneVerificationClear());
    }
  }, [data]);

  const handleOTPSubmit = () => {
    dispatch(requestPhoneVerification({
      phone: phoneNum,
    }));
  };

  return (
    <>
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
                            {
                              !!errorMessage && (
                                <Text style={styles.phoneError}>{errorMessage}</Text>
                              )
                            }
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
      { isLoading && <LoadingScreen />}
    </>
  );
};

export default withTheme(SignUpOTP);
