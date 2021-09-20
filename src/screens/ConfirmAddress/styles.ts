import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
    backgroundColor: theme.colors.white,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 37,
    paddingTop: 50,
    justifyContent: 'space-between',
    height: '100%',
  },
  input: {
    marginBottom: 23,
  },
  button: {
    borderRadius: 15,
    marginTop: 30,
  },
  scrollContainer: {
    flex: 1,
  },
  label: {
    color: theme.colors.black,
  },
});

export default useStyles;
