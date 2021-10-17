import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'styles/theme';


const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: -theme.spaces.xs,
    marginBottom: theme.spaces.m,
    fontSize: theme.fontSizes.headline,
    lineHeight: 30,
    fontWeight: '700',
    color: '#666',
  },
  inventoryItem: {
    marginBottom: theme.spaces.m,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: 'rgb(56, 96, 165)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 0.15,
  },
  inventoryImageContainer: {
    marginRight: theme.spaces.m,
  },
  inventoryImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  inventoryContent: {
    flex: 1,
  },
  inventoryPanel: {
    display: 'flex',
    flexDirection: 'row',
  },
  inventoryPriceCol: {
    flex: 1,
  },
  inventoryName: {
    fontSize: theme.fontSizes.small,
    color: '#666',
    fontWeight: '700',
  },
  inventoryText: {
    fontSize: theme.fontSizes.small,
    color: '#666',
    fontWeight: '400',
  },
  p: {
    marginBottom: 7,
  },
  priceText: {
    fontSize: theme.fontSizes.body,
    // @ts-ignore-next-line
    fontWeight: theme.fontWeights.semibold,
    color: '#666',
  },
  addToCartButtonCounter: {
    height: 23,
    width: 70,
  },
  wrapperBox: {
    backgroundColor: '#eee',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  totalBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: theme.spaces.s,
    paddingVertical: 20,
  },
  wrapperBoxContainer: {
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  },
  wrapperBoxContent: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  },
  totalBlockLeftCol: {
    flex: 1,
  },
  totalBlockRightCol: {
    width: 145,
  },
  textSmall: {
    fontSize: theme.fontSizes.captionSmall,
    color: '#666',
  },
  totalPrice: {
    fontSize: theme.fontSizes.h3,
    color: '#666',
    fontWeight: '700',
  },
  emptyList: {
    fontSize: theme.fontSizes.h2,
    color: '#666',
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonTextCheckout: {
    fontWeight: '600',
  },
  scrollBox: {
    paddingTop: 8,
    paddingHorizontal: 20,
    height: 400,
  },
});
export default useStyles;
