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
    fontSize: 18,
    color: theme.colors.gray,
    fontWeight: 'bold',
  },
  subTitle: {
    color: theme.colors.gray,
    fontWeight: '600',
  },
  content: {
    color: theme.colors.gray,
    fontSize: 13,
  },
  contentContainer: {
    marginTop: 20,
  },
  priceContent: {
    color: theme.colors.gray,
    opacity: 0.5,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  subTotal: {
    fontWeight: '500',
  },
  total: {
    fontWeight: '600',
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
