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
    fontWeight: 'bold',
    color: theme.colors.gray,
    marginVertical: 20,
  },
  description: {
    color: theme.colors.gray,
  },
  button: {
    borderRadius: 15,
    width: '100%',
    marginBottom: 20,
  },
  link: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
    fontSize: 12,
  },
  bottomText: {
    fontSize: 12,
    color: theme.colors.gray,
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
