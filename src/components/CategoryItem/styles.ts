import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    width: '33.33%',
    paddingRight: 14,
    marginBottom: 28,
  },
  contentBox: {
    aspectRatio: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 8,
    shadowColor: 'rgb(56, 96, 165)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 0.15,
    paddingHorizontal: 15,
    paddingVertical: 9,
    backgroundColor: '#fff',
  },
  contentBoxImage: {
    resizeMode: 'contain',
  },
  label: {
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
});
export default useStyles;
