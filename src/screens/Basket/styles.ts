import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType, basketLength = 0) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
    backgroundColor: basketLength ? '#eee' : '#fff',
  },
});
export default useStyles;
