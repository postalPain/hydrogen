import { StyleSheet } from 'react-native';

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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 30,
  },
});

export default useStyles;
