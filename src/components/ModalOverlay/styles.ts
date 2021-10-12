import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 25,
  },
  overlay: {
    position: 'absolute',
    width: '1000%',
    height: '1000%',
    backgroundColor: 'rgba(11, 11, 11, 0.45)',
    top: 0,
    left: 0,
  },
  closeContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  contentWrapper: {
    flex: 1,
  },
});

export default useStyles;
