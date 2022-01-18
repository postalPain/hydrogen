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
    ...theme.fonts.spartan700 as any,
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: 20,
  },
  description: {
    ...theme.fonts.spartan500 as any,
    fontSize: 12,
    lineHeight: 21,
    color: theme.colors.text,
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
