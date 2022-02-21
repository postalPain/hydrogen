import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 100,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(11, 11, 11, 0.45)',
  },
  loaderBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -100,
    width: 81,
    height: 85,
    backgroundColor: '#fff',
    borderRadius: 15,
  },
});

export default useStyles;
