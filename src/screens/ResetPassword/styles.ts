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
    ...theme.fonts.spartan700 as any,
    color: theme.colors.text,
    fontSize: 18,
  },
  description: {
    ...theme.fonts.spartan400 as any,
    color: theme.colors.text,
    fontSize: 12,
    lineHeight: 21,
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
