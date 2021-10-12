import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingTop: 70,
    paddingBottom: 50,
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    justifyContent: 'space-between',
    flex: 1,
  },
  input: {
    marginTop: 46,
    marginBottom: 12,
  },
  button: {
    borderRadius: 15,
  },
  link: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default useStyles;
