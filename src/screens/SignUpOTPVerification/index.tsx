import React, { useRef, useState } from 'react';
import {
  View, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  withTheme,
  Text,
} from '@stryberventures/stryber-react-native-ui-components';
import { RouteProp } from '@react-navigation/native';

import i18n from 'i18n';
import { ProjectThemeType } from 'theme';
import { RootStackParamList } from 'navigation/types';
import { Routes } from 'navigation';
import {
  requestPhoneVerification,
  signUp,
} from 'store/user/actions';
import {
  userErrorSelector,
  userLoadingSelector,
  requestPhoneVerificationLoadingSelector,
  requestPhoneVerificationErrorSelector,
} from 'store/user/selectors';
import { useResetUserError } from 'utilities/hooks';
import { HEADER_HEIGHT } from 'constants/';
import { CommentCheckIcon } from 'components/Icons';
import {
  DismissKeyboard,
  OTPInput,
  ResendButton,
  LoadingScreen,
  ProgressBar,
} from 'components';
import useStyles from './styles';

interface ISignUpOTPVerificationProps {
  theme: ProjectThemeType;
  route: RouteProp<RootStackParamList, Routes.SignUpOTPVerification>;
}

const { height } = Dimensions.get('window');

const SignUpOTPVerification: React.FC<ISignUpOTPVerificationProps> = ({ theme, route }) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();

  const errorMessage = useSelector(userErrorSelector);
  const isLoading = useSelector(userLoadingSelector);
  const isLoadingRequestVerification = useSelector(requestPhoneVerificationLoadingSelector());
  const errorMessageRequestVerification = useSelector(requestPhoneVerificationErrorSelector());

  const otpInputRef = useRef();
  const [otpCode, setOtpCode] = useState(null);

  const handleSubmit = () => {
    dispatch(signUp({
      ...route.params.signupData,
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

  useResetUserError();

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
                <View>
                  <ProgressBar
                    currentStep={2}
                    style={styles.progressBar}
                  />
                  <Button
                    style={styles.button}
                    onPress={handleSubmit}
                  >
                    {i18n.t('screens.signUpOTPVerification.button')}
                  </Button>
                </View>
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
