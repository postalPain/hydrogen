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
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: theme.colors.primary,
    fontWeight: '600',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  content: {
    flex: 1,
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
    ...theme.fonts.spartan700,
    color: theme.colors.text,
    fontSize: 18,
    lineHeight: 30,
  },
  pageSubHeader: {
    textAlign: 'center',
    ...theme.fonts.spartan500,
    color: theme.colors.text,
    fontSize: 12,
    lineHeight: 21,
  },
  otpInput: {
    marginTop: 30,
  },
  resendButton: {
    marginTop: 27,
  },
  messageBox: {},
  successMessage: {
    textAlign: 'center',
    ...theme.fonts.openSans600,
    fontSize: 14,
    lineHeight: 19,
    color: '#b4bc48',
  },
  errorMessage: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 19,
    color: theme.colors.red,
  },
  progressBar: {
    marginBottom: 10,
    marginTop: 20,
  },
});

export default useStyles;
