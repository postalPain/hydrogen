import { Platform, StatusBar } from 'react-native';
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
    lightGray: '#eee',
    yellow: '#FDA717',
  },
};

export type ProjectThemeType = ThemeType & typeof theme;

export default theme;
