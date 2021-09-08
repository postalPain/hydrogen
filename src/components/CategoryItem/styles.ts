import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    width: '33.33%',
    paddingRight: 14,
    marginBottom: 28,
  },
  contentBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    paddingVertical: 7,
    backgroundColor: '#fff',
  },
  labelContainer: {
    height: 24,
    marginBottom: 5,
  },
  label: {
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  imageWrapper: {},
  image: {
    width: 72,
    height: 56,
  },
});
export default useStyles;
