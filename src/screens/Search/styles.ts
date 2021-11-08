import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
    height: '100%',
    position: 'relative',
    flex: 1,
    backgroundColor: '#0C5268',
  },
});
export default useStyles;
