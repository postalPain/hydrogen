import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    width: '33.33%',
    marginBottom: 15,
    paddingRight: theme.spaces.m,
  },
  contentBox: {
    maxHeight: 200,
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 8,
    shadowColor: 'rgb(56, 96, 165)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 0.15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  touchableContent: {
    marginTop: 18,
  },
  p: {
    marginBottom: 2,
  },
  price: {
    marginTop: 3,
    ...theme.fonts.spartan800,
    fontSize: 12,
    lineHeight: 18,
    color: '#131313',
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    aspectRatio: 1.047,
    width: '100%',
  },
  productName: {
    marginBottom: 8,
  },
  text: {
    ...theme.fonts.spartan400 as any,
    fontSize: 8,
    lineHeight: 12,
    color: '#131313',
  },
  more: {
    ...theme.fonts.spartan400 as any,
    fontSize: 6,
    color: '#131313',
    textDecorationLine: 'underline',
  },
  addToCartButton: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 5,
  },
  addToCartButtonCounter: {
    width: 'auto',
    position: 'absolute',
    zIndex: 1,
    left: 10,
    right: 10,
    top: 5,
    marginVertical: 0,
  },
  disableOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(196, 196, 196, 0.41)',
    borderRadius: 8,
    zIndex: 10,
  },
  badgeNotAvailable: {
    position: 'absolute',
    zIndex: 10,
    left: 8,
    top: 10,
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: 'rgba(196, 196, 196, 0.78)',
  },
  badgeNotAvailableText: {
    fontSize: 6,
    lineHeight: 10,
    ...theme.fonts.spartan600 as any,
    color: '#131313',
  },
});
export default useStyles;
