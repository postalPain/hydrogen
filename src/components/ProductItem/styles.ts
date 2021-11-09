import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    width: '33.33%',
    marginBottom: 28,
    paddingRight: theme.spaces.m,
  },
  contentBox: {
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
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  touchableContent: {
    marginTop: 18,
  },
  p: {
    marginBottom: 5,
  },
  price: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '800',
    color: '#666',
  },
  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 8,
  },
  image: {
    width: 72,
    height: 56,
  },
  text: {
    fontSize: 8,
    fontWeight: '400',
    color: '#666',
  },
  more: {
    fontSize: 6,
    color: '#666',
    textDecorationLine: 'underline',
  },
  addToCartButton: {
    position: 'absolute',
    zIndex: 1,
    right: 0,
    top: 0,
    padding: 10,
  },
  addToCartButtonCounter: {
    width: 'auto',
    position: 'absolute',
    zIndex: 1,
    left: 8,
    right: 8,
    top: 0,
    height: 18,
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
    fontWeight: '600',
    color: '#666',
  },
});
export default useStyles;
