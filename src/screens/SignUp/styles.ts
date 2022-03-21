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
    marginTop: 30,
  },
  nameContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 60,
  },
  nameInput: {
    flex: 1,
  },
  firstName: {
    marginRight: 10,
  },
  lastName: {
    marginLeft: 10,
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
  progressBar: {
    marginBottom: 10,
    marginTop: 20,
  },
  loginLink: {
    marginTop: 13,
    marginBottom: 10,
  },
});

export default useStyles;
