import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
    backgroundColor: theme.colors.white,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 37,
    paddingTop: 50,
  },
  wrapperKeyboardOpened: {
    flex: 0,
  },
  input: {
    marginBottom: 23,
  },
  button: {
    borderRadius: 15,
    marginTop: 30,
  },
  scrollContainer: {
    flex: 1,
  },
  label: {
    color: theme.colors.black,
  },
  keyboardAvoidingView: {
    flex: 1,
  },
});

export default useStyles;
