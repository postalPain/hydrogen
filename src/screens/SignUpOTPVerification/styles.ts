import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
  safeArea: {
    ...theme.components.safeArea,
    backgroundColor: theme.colors.white,
  },
  container: {
    paddingHorizontal: 27,
  },
  input: {
    marginTop: 54,
  },
  button: {
    borderRadius: 15,
    marginBottom: 20,
  },
  formContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  link: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  formWrapper: {
    flex: 1,
  },
  phoneContainer: {
    marginTop: 5,
    marginBottom: 0,
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
  },
  phoneInput: {
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  phoneError: {
    color: '#EA3546',
    fontSize: 12,
    marginTop: 15,
  },
  pageIconContainer: {
    marginTop: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 71,
    height: 71,
    borderRadius: 35.5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0C5268',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  pageHeader: {
    marginTop: theme.spaces.xxl2,
    marginBottom: theme.spaces.s,
    textAlign: 'center',
    ...theme.fonts.spartan700 as any,
    color: theme.colors.text,
    fontSize: 18,
    lineHeight: 30,
  },
  pageSubHeader: {
    textAlign: 'center',
    ...theme.fonts.spartan500 as any,
    color: theme.colors.text,
    fontSize: 12,
    lineHeight: 21,
  },
});

export default useStyles;
