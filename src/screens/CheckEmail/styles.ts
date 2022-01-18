import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'space-around',
  },
  topContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    ...theme.fonts.spartan700 as any,
    color: theme.colors.text,
    marginVertical: 20,
  },
  description: {
    ...theme.fonts.spartan500 as any,
    lineHeight: 22,
    color: theme.colors.text,
  },
  button: {
    borderRadius: 15,
    width: '100%',
    marginBottom: 20,
  },
  link: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
    ...theme.fonts.spartan500 as any,
    fontSize: 10,
  },
  bottomText: {
    ...theme.fonts.spartan500 as any,
    fontSize: 10,
    lineHeight: 18,
    color: theme.colors.text,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContainer: {
    alignItems: 'center',
  },
});

export default useStyles;
