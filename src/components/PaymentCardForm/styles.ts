import { StyleSheet } from 'react-native';
import theme from 'styles/theme';

const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  cardLeftInput: {
    flex: 1,
    marginRight: 10,
  },
  cardRightInput: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    borderRadius: 15,
    marginBottom: 80,
  },
  title: {
    ...theme.fonts.spartan700 as any,
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: 30,
  },
  inputLabel: {
    ...theme.fonts.openSans600 as any,
    color: theme.colors.text,
    fontSize: 12,
    marginBottom: 8,
  },
});

export default useStyles;
