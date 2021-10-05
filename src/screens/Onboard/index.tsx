import React from 'react';
import useStyles from './styles';
import {
  View, SafeAreaView, Image, ImageBackground,
} from 'react-native';
import { Text, withTheme, Button } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'navigation';
import i18n from 'i18n';

interface IOnboardProps {
  theme?: ProjectThemeType;
}

const Onboard: React.FC<IOnboardProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { navigate } = useNavigation();

  const onContinuePress = () => navigate(Routes.MapScreen);
  return (
    <ImageBackground
      source={require('../../../assets/images/onboardBg.png')}
      style={styles.imageBackground}
    >
      <SafeAreaView style={theme.components.safeArea}>
        <View style={styles.container}>
          <View style={[styles.contentWrapper, styles.topWrapper]}>
            <Image source={require('../../../assets/images/logo.png')} />
            <Text style={styles.title}>{i18n.t('screens.onboard.title')}</Text>
          </View>
          <View style={[styles.contentWrapper, styles.bottomWrapper]}>
            <Button style={styles.button} onPress={onContinuePress}>{i18n.t('screens.onboard.button')}</Button>
            <Button type="link" style={styles.linkContainer} textStyle={styles.link}>{i18n.t('screens.onboard.link')}</Button>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default withTheme(Onboard);
