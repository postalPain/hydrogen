import React from 'react';
import useStyles from './styles';
import { View } from 'react-native';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import i18n from 'i18n';
import { CheckCircleIcon } from 'components/Icons';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'navigation';

interface IResetPasswordSuccessProps {
  theme?: ProjectThemeType;
}

const ResetPasswordSuccess: React.FC<IResetPasswordSuccessProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();

  const handleLoginPress = () => navigate(Routes.Login);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <CheckCircleIcon style={styles.icon} width={70} height={70} />
        <Text style={styles.title}>{i18n.t('screens.resetPasswordSuccess.title')}</Text>
        <Text style={styles.description}>{i18n.t('screens.resetPasswordSuccess.description')}</Text>
        <Text style={styles.description}>{i18n.t('screens.resetPasswordSuccess.description2')}</Text>
      </View>
      <Button onPress={handleLoginPress} style={styles.button}>Login</Button>
    </View>
  );
};

export default withTheme(ResetPasswordSuccess);
