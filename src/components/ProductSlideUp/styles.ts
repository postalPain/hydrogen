import { StyleSheet } from 'react-native';
import theme from 'styles/theme';

const useStyles = () => StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  productBox: {
    flex: 1,
  },
  imageWrapper: {
    marginTop: 60,
    marginBottom: 30,
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 185,
    resizeMode: 'contain',
  },
  productName: {
    marginBottom: 5,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '700',
    color: theme.colors.text,
  },
  description: {
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: '600',
    color: '#999',
  },
  origin: {
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 30,
    fontWeight: '700',
    color: theme.colors.text,
  },
  amount: {
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 30,
    fontWeight: '700',
    color: theme.colors.text,
  },
  price: {
    fontSize: 20,
    lineHeight: 30,
    fontWeight: '700',
    color: '#fda717',
  },
  buttonPanel: {
    paddingVertical: 10,
  },
  addedToCartPopup: {
    position: 'absolute',
    width: 120,
    marginLeft: -60,
    top: -30,
    left: '50%',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: 'rgb(56, 96, 165)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 0.15,
  },
  addedToCartPopupText: {
    marginLeft: 10,
    fontSize: 10,
    fontWeight: '500',
    color: theme.colors.text,
  },
  countText: {
    color: '#fda717',
  },
});
export default useStyles;
