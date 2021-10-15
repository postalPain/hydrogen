import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
    right: -7,
    top: -5,
    width: 21,
    height: 21,
    borderRadius: 10,
    backgroundColor: '#fda717',
  },
  text: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '700',
    color: '#fff',
  },
});

export default useStyles;
