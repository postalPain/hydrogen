import React, { useRef, useEffect, useState } from 'react';
import {
  View, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  withTheme,
  Text,
} from '@stryberventures/stryber-react-native-ui-components';
import { useNavigation } from '@react-navigation/native';

import i18n from 'i18n';
import { ProjectThemeType } from 'theme';
import { Routes } from 'navigation';
import {
  verifyPhone,
  verifyPhoneClear,
  requestPhoneVerification,
  requestPhoneVerificationClear,
} from 'store/user/actions';
import {
  phoneVerificationDataSelector,
  phoneVerificationLoadingSelector,
  phoneVerificationErrorSelector,
  requestPhoneVerificationLoadingSelector,
  requestPhoneVerificationErrorSelector,
} from 'store/user/selectors';
import { HEADER_HEIGHT } from 'constants/';
import { CommentCheckIcon } from 'components/Icons';
import {
  DismissKeyboard,
  OTPInput,
  ResendButton,
  LoadingScreen,
} from 'components';
import useStyles from './styles';

interface ISignUpOTPVerificationProps {
  theme: ProjectThemeType;
  route: any;
}

const { height } = Dimensions.get('window');

const SignUpOTPVerification: React.FC<ISignUpOTPVerificationProps> = ({ theme, route }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const data = useSelector(phoneVerificationDataSelector());
  const isLoading = useSelector(phoneVerificationLoadingSelector());
  const errorMessage = useSelector(phoneVerificationErrorSelector());

  const isLoadingRequestVerification = useSelector(requestPhoneVerificationLoadingSelector());
  const errorMessageRequestVerification = useSelector(requestPhoneVerificationErrorSelector());

  const otpInputRef = useRef();
  const [otpCode, setOtpCode] = useState(null);

  useEffect(() => {
    if (data) {
      dispatch(verifyPhoneClear());
      dispatch(requestPhoneVerificationClear());
      // @ts-ignore
      navigate(Routes.CreatePassword, { signupData: { ...route.params.signupData } });
    }
  }, [data]);

  const handleSubmit = () => {
    dispatch(verifyPhone({
      phone: route.params.signupData.phone,
      code: otpCode,
    }));
    // @ts-ignore
    otpInputRef.current.clear();
  };
  const onOTPFilled = (otp) => {
    setOtpCode(otp);
  };
  const onResendButtonPress = () => {
    dispatch(requestPhoneVerification({
      phone: route.params.signupData.phone,
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
                <Text style={styles.pageHeader}>{i18n.t('screens.signUpOTPVerification.pageHeader')}</Text>
                <Text style={styles.pageSubHeader}>
                  {`${i18n.t('screens.signUpOTPVerification.pageSubHeader')}\n${route.params.signupData.phone}`}
                </Text>
              </View>

              <View onStartShouldSetResponder={() => true} style={styles.content}>
                <View style={styles.formContainer}>
                  <OTPInput
                    ref={otpInputRef}
                    onFilled={onOTPFilled}
                    style={styles.otpInput}
                  />
                  <ResendButton
                    onPress={onResendButtonPress}
                    style={styles.resendButton}
                  />
                  <View style={styles.messageBox}>
                    { !!data && (
                      <Text style={styles.successMessage}>
                        {i18n.t('screens.signUpOTPVerification.successMessage')}
                      </Text>
                    )}
                    { (!!errorMessage) && (
                      <Text style={styles.errorMessage}>
                        {errorMessage}
                      </Text>
                    )}
                    { (!!errorMessageRequestVerification) && (
                      <Text style={styles.errorMessage}>
                        {errorMessageRequestVerification}
                      </Text>
                    )}
                  </View>
                </View>
                <Button
                  style={styles.button}
                  onPress={handleSubmit}
                >
                  {i18n.t('screens.signUpOTPVerification.button')}
                </Button>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </DismissKeyboard>
      { (isLoading || isLoadingRequestVerification) && <LoadingScreen />}
    </>
  );
};

export default withTheme(SignUpOTPVerification);
