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
    ...theme.fonts.spartan700,
    marginBottom: 5,
    fontSize: 18,
    lineHeight: 30,
    color: theme.colors.text,
  },
  description: {
    ...theme.fonts.spartan400 as any,
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 21,
    color: theme.colors.text,
  },
  origin: {
    ...theme.fonts.spartan700 as any,
    fontSize: 14,
    lineHeight: 30,
    color: theme.colors.text,
    marginBottom: 10,
  },
  amount: {
    ...theme.fonts.spartan700 as any,
    fontSize: 14,
    lineHeight: 30,
    color: theme.colors.text,
    marginBottom: 10,
  },
  price: {
    ...theme.fonts.spartan700 as any,
    fontSize: 20,
    lineHeight: 30,
    color: '#fda717',
    marginTop: 10,
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
    ...theme.fonts.spartan500 as any,
    marginLeft: 10,
    fontSize: 10,
    color: theme.colors.text,
  },
  countText: {
    color: '#fda717',
  },
});
export default useStyles;
