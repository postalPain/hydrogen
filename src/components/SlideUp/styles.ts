import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#fff',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  contentBox: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  crossButton: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 0,
    padding: 22,
  },
});
export default useStyles;
