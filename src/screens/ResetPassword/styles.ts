import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 27,
    backgroundColor: theme.colors.white,
    flex: 1,
  },
  title: {
    color: theme.colors.gray,
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: theme.colors.gray,
    fontSize: 12,
    marginVertical: 30,
  },
  button: {
    borderRadius: 15,
  },
  formContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default useStyles;
