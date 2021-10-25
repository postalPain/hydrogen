import { StyleSheet, Platform } from 'react-native';
import { ProjectThemeType } from 'styles/theme';


const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  header: {
    marginTop: theme.spaces.xs,
    marginBottom: theme.spaces.m,
    paddingHorizontal: theme.spaces.xxl2,
    fontSize: theme.fontSizes.headline,
    lineHeight: 30,
    fontWeight: '700',
    color: '#666',
  },
  fullBlock: {
    display: 'flex',
    flex: 1,
  },
  fullContent: {
    flex: 1,
    borderBottomRightRadius: 22,
    borderBottomLeftRadius: 22,
    backgroundColor: '#fff',
  },
  scrollBox: {
    paddingHorizontal: 14,
  },
  inventoryItem: {
    marginVertical: theme.spaces.xs,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginHorizontal: 8,
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
  totalBlock: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: theme.spaces.s,
    paddingTop: 20,
    paddingBottom: Platform.OS === 'ios' ? 0 : 20,
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
  buttonTextCheckout: {
    fontWeight: '600',
  },
  emptyList: {
    fontSize: theme.fontSizes.body,
    color: '#666',
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  cartIconContainer: {
    marginTop: 40,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: theme.colors.primary,
  },
  emptyBlock: {
    flex: 1,
  },
  emptyBlockContent: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  emptyBlockPanel: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: Platform.OS === 'ios' ? 0 : 20,
  },
  exploreButton: {
    width: '100%',
  },
  successBlock: {
    paddingHorizontal: theme.spaces.xxl2,
    marginBottom: 15,
  },
  successHeaderSection: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  successUpdateHeader: {
    marginLeft: 15,
    fontSize: theme.fontSizes.body,
    color: '#666',
    fontWeight: '700',
  },
  successUpdateText: {
    fontSize: theme.fontSizes.small,
    // @ts-ignore
    fontWeight: '400',
    lineHeight: 20,
  },
});
export default useStyles;
