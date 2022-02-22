import { Platform, StatusBar, TextStyle } from 'react-native';
import { ThemeType } from '@stryberventures/stryber-react-native-ui-components';

const theme = {
  components: {
    safeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: 'transparent',
    },
    link: {
      color: '#007aff',
    },
    dashboard: {
      backgroundColor: '#eef7fe',
    },
    logCigaretteChart: {
      axisColor: '#e2e8f1',
      textColor: '#233340',
      barColor: '#9ab9fd',
      barTextColor: '#729dfd',
      labelFontSize: 10,
      valueFontSize: 12,
      barWidth: 6,
    },
    contentBox: {
      borderRadius: 26,
      backgroundColor: '#fff',
    },
  },
  colors: {
    availability: {
      available: '#5baa60',
      busy: '#f1a62d',
      offline: '#ccc',
    },
    backgroundBlue: '#edf0ff',
    primary: '#0C5268',
    sky: '#adc5fc',
    cross: '#95acbf',
    gray: '#666',
    text: '#131313',
    lightGray: '#eee',
    yellow: '#FDA717',
  },
  fonts: {
    spartan100: {
      fontFamily: 'Spartan-Thin',
      ...(Platform.OS === 'ios' ? { fontWeight: '100' } : {}) as TextStyle,
    },
    spartan200: {
      fontFamily: 'Spartan-ExtraLight',
      ...(Platform.OS === 'ios' ? { fontWeight: '200' } : {}) as TextStyle,
    },
    spartan300: {
      fontFamily: 'Spartan-Light',
      ...(Platform.OS === 'ios' ? { fontWeight: '300' } : {}) as TextStyle,
    },
    spartan400: {
      fontFamily: 'Spartan-Regular',
      ...(Platform.OS === 'ios' ? { fontWeight: '400' } : {}) as TextStyle,
    },
    spartan500: {
      fontFamily: 'Spartan-Medium',
      ...(Platform.OS === 'ios' ? { fontWeight: '500' } : {}) as TextStyle,
    },
    spartan600: {
      fontFamily: 'Spartan-SemiBold',
      ...(Platform.OS === 'ios' ? { fontWeight: '600' } : {}) as TextStyle,
    },
    spartan700: {
      fontFamily: 'Spartan-Bold',
      ...(Platform.OS === 'ios' ? { fontWeight: '700' } : {}) as TextStyle,
    },
    spartan800: {
      fontFamily: 'Spartan-ExtraBold',
      ...(Platform.OS === 'ios' ? { fontWeight: '800' } : {}) as TextStyle,
    },
    spartan900: {
      fontFamily: 'Spartan-Black',
      ...(Platform.OS === 'ios' ? { fontWeight: '900' } : {}) as TextStyle,
    },
    openSans300: {
      fontFamily: 'OpenSans-Light',
      ...(Platform.OS === 'ios' ? { fontWeight: '300' } : {}) as TextStyle,
    },
    openSans400: {
      fontFamily: 'OpenSans-Regular',
      ...(Platform.OS === 'ios' ? { fontWeight: '400' } : {}) as TextStyle,
    },
    openSans600: {
      fontFamily: 'OpenSans-SemiBold',
      ...(Platform.OS === 'ios' ? { fontWeight: '600' } : {}) as TextStyle,
    },
    openSans700: {
      fontFamily: 'OpenSans-Bold',
      ...(Platform.OS === 'ios' ? { fontWeight: '700' } : {}) as TextStyle,
    },
    openSans800: {
      fontFamily: 'OpenSans-ExtraBold',
      ...(Platform.OS === 'ios' ? { fontWeight: '800' } : {}) as TextStyle,
    },
  },
};

export type ProjectThemeType = ThemeType & typeof theme;

export default theme;
