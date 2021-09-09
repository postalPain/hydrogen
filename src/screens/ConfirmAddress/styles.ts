import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 37,
    paddingTop: 50,
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 23,
  },
  button: {
    borderRadius: 15,
  },
});

export default useStyles;
