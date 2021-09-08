import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    width: 8,
    height: 8,
    marginHorizontal: 4,
    borderRadius: 4,
    backgroundColor: '#ccc',
  },
  containerActive: {
    backgroundColor: '#0c5268',
  },
});

export default useStyles;
