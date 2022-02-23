import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { useNavigation } from '@react-navigation/native';

import i18n from 'i18n';
import { ProjectThemeType } from 'theme';
import { Routes } from 'navigation';
import { userSelector } from 'store/user/selectors';
import { CheckCircleIcon } from 'components/Icons';
import { DismissKeyboard } from 'components';
import useStyles from './styles';

interface ISignUpProps {
  theme: ProjectThemeType
}

const SIGNUP_PAGES_COUNT = 6;

const SignUpSuccess: React.FC<ISignUpProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { navigate, getState } = useNavigation();
  const user = useSelector(userSelector);
  const navStateRoutes = getState().routes;
  const routeBeforeSignUp = navStateRoutes[navStateRoutes.length - SIGNUP_PAGES_COUNT];

  const onPressContinue = () => {
    if (routeBeforeSignUp.name === Routes.DrawerNavigation) {
      return navigate(Routes.DrawerNavigation, { screen: Routes.TabNavigation });
    }
    return navigate(Routes.Checkout);
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
                  {i18n.t('screens.signUpSuccess.pageHeader', { name: `${user.first_name} ${user.last_name}` })}
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
