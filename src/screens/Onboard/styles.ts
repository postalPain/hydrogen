import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: theme.colors.yellow,
    borderRadius: 15,
    width: '100%',
  },
  link: {
    ...theme.fonts.spartan500 as any,
    textDecorationLine: 'underline',
    color: theme.colors.white,
    fontSize: 12,
  },
  imageBackground: {
    flex: 1,
    backgroundColor: '#0C5268',
  },
  linkContainer: {
    alignSelf: 'center',
  },
  contentWrapper: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    ...theme.fonts.spartan600 as any,
    fontSize: 24,
    color: theme.colors.white,
    marginTop: 45,
  },
  bottomWrapper: {
    marginBottom: 50,
  },
  topWrapper: {
    marginTop: 70,
  },
});

export default useStyles;
