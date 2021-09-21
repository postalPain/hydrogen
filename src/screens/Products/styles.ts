import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
    height: '100%',
    backgroundColor: '#0C5268',
  },
});
export default useStyles;
