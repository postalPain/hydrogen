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
});

export default useStyles;
