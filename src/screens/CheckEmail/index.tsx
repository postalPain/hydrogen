import React from 'react';
import useStyles from './styles';
import { View } from 'react-native';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import { BigLocationCircle } from 'components/Icons';
import { useNavigation } from '@react-navigation/native';
import { openInbox } from 'react-native-email-link';
import i18n from 'i18n';

interface ICheckEmailProps {
  theme?: ProjectThemeType;
}

const CheckEmail: React.FC<ICheckEmailProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <BigLocationCircle />
        <Text style={styles.title}>{i18n.t('screens.checkEmail.title')}</Text>
        <Text style={styles.description}>{i18n.t('screens.checkEmail.description')}</Text>
        <Text style={styles.description}>{i18n.t('screens.checkEmail.description2')}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Button style={styles.button} onPress={() => openInbox()}>{i18n.t('screens.checkEmail.button')}</Button>
        <Text style={styles.bottomText}>{i18n.t('screens.checkEmail.bottomText')}</Text>
        <View style={styles.linkContainer}>
          <Text style={styles.bottomText}>{`${i18n.t('screens.checkEmail.bottomText2')} `}</Text>
          <Text style={styles.link} onPress={() => goBack()}>{i18n.t('screens.checkEmail.link')}</Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(CheckEmail);
