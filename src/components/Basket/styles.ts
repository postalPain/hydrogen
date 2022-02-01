import { StyleSheet } from 'react-native';
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
    ...theme.fonts.spartan700 as any,
    fontSize: theme.fontSizes.headline,
    lineHeight: 32,
    fontWeight: '700',
    color: theme.colors.text,
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
  scrollBoxContent: {
    paddingBottom: theme.spaces.xs,
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
    alignItems: 'center',
  },
  inventoryPriceCol: {
    flex: 1,
  },
  inventoryName: {
    ...theme.fonts.spartan700 as any,
    fontSize: theme.fontSizes.small,
    color: theme.colors.text,
  },
  inventoryText: {
    ...theme.fonts.spartan400 as any,
    lineHeight: 20,
    fontSize: theme.fontSizes.small,
    color: theme.colors.text,
  },
  p: {
    marginBottom: 7,
  },
  priceText: {
    marginTop: 2,
    ...theme.fonts.spartan700 as any,
    fontSize: theme.fontSizes.body,
    color: theme.colors.text,
  },
  addToCartButtonCounter: {
    marginVertical: 0,
    height: 23,
    width: 70,
  },
  totalBlock: {
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 25,
    paddingRight: theme.spaces.s,
    paddingTop: 20,
    paddingBottom: 12,
  },
  totalBlockLeftCol: {
    flex: 1,

  },
  totalBlockRightCol: {
    display: 'flex',
    alignItems: 'flex-end',
    width: 145,
  },
  textSmall: {
    ...theme.fonts.spartan400 as any,
    fontSize: theme.fontSizes.captionSmall,
    color: theme.colors.text,
  },
  totalPrice: {
    marginTop: 2,
    ...theme.fonts.spartan700 as any,
    fontSize: theme.fontSizes.h3,
    color: theme.colors.text,
    lineHeight: 30,
  },
  buttonCheckout: {
    marginVertical: 0,
  },
  buttonTextCheckout: {
    ...theme.fonts.openSans600 as any,
  },
  emptyList: {
    ...theme.fonts.spartan500 as any,
    fontSize: theme.fontSizes.body,
    color: theme.colors.text,
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
    paddingBottom: 20,
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
    ...theme.fonts.spartan700,
    fontSize: theme.fontSizes.body,
    color: theme.colors.text,
  },
  successUpdateText: {
    ...theme.fonts.spartan400 as any,
    fontSize: theme.fontSizes.small,
    lineHeight: 20,
  },
});
export default useStyles;
