import React from 'react';
import useStyles from './styles';
import {
  View, SafeAreaView,
} from 'react-native';
import {
  Button, Text,
  withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import i18n from 'i18n';
import { ProjectThemeType } from 'theme';
import { Routes } from 'navigation';
import { useNavigation } from '@react-navigation/native';
import { CheckCircleIcon } from 'components/Icons';
import { DismissKeyboard } from 'components';

interface ISignUpProps {
  theme: ProjectThemeType
}

const SignUpSuccess: React.FC<ISignUpProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();
  const onPressContinue = () => {
    navigate(Routes.Checkout);
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.flexStyle}>
          <View style={styles.content}>
            <View>
              <View style={styles.pageIconContainer}>
                <CheckCircleIcon
                  width={71}
                  height={71}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.pageHeader}>
                  {i18n.t('screens.signUpSuccess.pageHeader', { name: 'Sara Connor' })}
                </Text>
                <Text style={styles.pageSubHeader}>
                  {i18n.t('screens.signUpSuccess.pageSubHeader')}
                </Text>
              </View>

            </View>
            <Button
              style={styles.button}
              onPress={onPressContinue}
            >
              {i18n.t('screens.signUpSuccess.button')}
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default withTheme(SignUpSuccess);
