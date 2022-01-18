import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  scrollView: {
    backgroundColor: theme.colors.white,
  },
  container: {
    paddingVertical: 27,
    paddingHorizontal: 32,
  },
  title: {
    ...theme.fonts.spartan700 as any,
    fontSize: 18,
    color: theme.colors.text,
  },
  subTitle: {
    marginBottom: 2,
    ...theme.fonts.spartan600 as any,
    color: theme.colors.text,
  },
  content: {
    ...theme.fonts.spartan500 as any,
    color: theme.colors.gray,
    fontSize: 14,
    lineHeight: 20,
  },
  contentContainer: {
    marginTop: 20,
  },
  priceContent: {
    color: theme.colors.text,
    opacity: 0.5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  subTotal: {
    ...theme.fonts.spartan500 as any,
  },
  total: {
    ...theme.fonts.spartan600 as any,
  },
  totalContainer: {
    marginTop: 20,
    paddingTop: 10,
    borderTopColor: theme.colors.gray,
    borderTopWidth: 0.2,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default useStyles;
