import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: -20,
  },
  carouselItem: {
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    height: 118,
    padding: 20,
    marginLeft: 25,
    marginRight: 25,
    borderWidth: 2,
    borderColor: '#AAAAAA',
  },
});
export default useStyles;
