import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

// eslint-disable-next-line
const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    flex: 1,
  },
  categoriesBox: {
    flex: 1,
    position: 'relative',
  },
  messageBox: {
    ...theme.components.contentBox,
    flex: 1,
    padding: 24,
  },
});
export default useStyles;
