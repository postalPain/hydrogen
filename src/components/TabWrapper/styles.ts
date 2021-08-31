import { StyleSheet } from 'react-native';
import { TAB_BAR_HEIGHT } from '../../constants';

const useStyles = () => StyleSheet.create({
  container: {
    paddingBottom: TAB_BAR_HEIGHT,
    flex: 1,
    height: '100%',
  },
});

export default useStyles;
