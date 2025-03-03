import { Platform, StatusBar } from 'react-native';

const theme = {
  components: {
    safeArea: {
      flex: 1,
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      backgroundColor: '#fff',
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
  },
  colors: {
    availability: {
      available: '#5baa60',
      busy: '#f1a62d',
      offline: '#ccc',
    },
    backgroundBlue: '#edf0ff',
    primary: '#014cff',
    sky: '#adc5fc',
    cross: '#95acbf',
  },
};

export default theme;
