import React from 'react';
import useStyles from './styles';
import {
  View, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Dimensions,
} from 'react-native';
import {
  Button,
  withTheme,
  Text,
} from '@stryberventures/stryber-react-native-ui-components';
import i18n from 'i18n';
import { ProjectThemeType } from 'theme';
import { Routes } from 'navigation';
import { useNavigation } from '@react-navigation/native';
import { DismissKeyboard } from 'components';
import { CommentCheckIcon } from 'components/Icons';
import { HEADER_HEIGHT } from 'constants/';

interface ISignUpOTPVerificationProps {
  theme: ProjectThemeType;
  route: any;
}

const { height } = Dimensions.get('window');

const SignUpOTPVerification: React.FC<ISignUpOTPVerificationProps> = ({ theme, route }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();

  console.log(route);
  const handleSubmit = () => {
    console.log('submit');
    // navigate(Routes.CreatePassword, { signupData: { ...route.params, phone: phoneNum } });
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
              <Text style={styles.pageHeader}>{i18n.t('screens.signUpOTPVerification.pageHeader')}</Text>
              <Text style={styles.pageSubHeader}>{i18n.t('screens.signUpOTPVerification.pageSubHeader')}</Text>
            </View>

            <View onStartShouldSetResponder={() => true} style={styles.formWrapper}>
              <View style={styles.formContainer}>
                <View>
                  <Text>Verification</Text>
                </View>
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
  );
};

export default withTheme(SignUpOTPVerification);
