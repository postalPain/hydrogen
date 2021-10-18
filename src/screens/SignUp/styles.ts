import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  safeArea: {
    ...theme.components.safeArea,
    backgroundColor: theme.colors.white,
  },
  container: {
    paddingHorizontal: 27,
    flex: 1,
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
});

export default useStyles;
