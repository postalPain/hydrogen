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
    textDecorationLine: 'underline',
    color: theme.colors.white,
    fontSize: 12,
    fontWeight: '500',
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
    fontSize: 24,
    fontWeight: '600',
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
