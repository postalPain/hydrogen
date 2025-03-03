import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'styles/theme';


const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  header: {
    ...theme.fonts.spartan700 as any,
    paddingHorizontal: 20,
    marginTop: -theme.spaces.xs,
    marginBottom: theme.spaces.xs,
    fontSize: theme.fontSizes.headline,
    lineHeight: 30,
    color: theme.colors.text,
  },
  inventoryItem: {
    marginBottom: theme.spaces.m,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  inventoryImageContainer: {
    marginRight: theme.spaces.m,
    padding: 10,
    borderRadius: 8,
    shadowColor: 'rgb(56, 96, 165)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    elevation: 8,
    shadowOpacity: 0.15,
    backgroundColor: '#fff',
  },
  inventoryImage: {
    width: 52,
    height: 52,
    resizeMode: 'contain',
  },
  inventoryContent: {
    flex: 1,
  },
  inventoriesList: {
    paddingHorizontal: theme.spaces.s,
  },
  inventorySideCol: {
    paddingLeft: theme.spaces.s,
  },
  inventoryPanel: {
    display: 'flex',
    flexDirection: 'row',
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
    fontSize: theme.fontSizes.small,
    color: theme.colors.text,
  },
  inventoryUnAvailable: {
    ...theme.fonts.spartan700 as any,
    fontSize: theme.fontSizes.small,
    color: theme.colors.yellow,
    fontWeight: '700',
  },
  p: {
    marginBottom: 7,
  },
  scrollBox: {
    marginHorizontal: -theme.spaces.s,
    paddingTop: 8,
    paddingHorizontal: 20,
    height: 400,
  },
  buttonPanel: {
    paddingTop: 20,
  },
  description: {
    ...theme.fonts.spartan500 as any,
    paddingHorizontal: 20,
    fontSize: theme.fontSizes.small,
    lineHeight: 18,
    color: theme.colors.text,
    marginBottom: theme.spaces.m,
  },
});
export default useStyles;
