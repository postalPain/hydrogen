import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 32,
    paddingVertical: 22,
    paddingBottom: 40,
  },
  button: {
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.gray,
    marginBottom: 20,
  },
  description: {
    color: theme.colors.gray,
  },
  input: {
    marginTop: 37,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default useStyles;
