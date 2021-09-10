import { StyleSheet } from 'react-native';
import { HEADER_AND_TAB_BAR_HEIGHT } from '../../constants';

const useStyles = () => StyleSheet.create({
  container: {
    paddingBottom: HEADER_AND_TAB_BAR_HEIGHT,
    flex: 1,
    height: '100%',
  },
});

export default useStyles;
