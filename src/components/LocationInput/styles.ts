import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  icon: {
    position: 'absolute',
    left: 15,
    top: 20,
    zIndex: 1,
  },
  input: {
    height: 55,
    paddingLeft: 40,
    paddingRight: 30,
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
});

export default useStyles;
