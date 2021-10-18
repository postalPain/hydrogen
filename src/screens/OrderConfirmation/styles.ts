import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.white,
  },
  container: {
    paddingHorizontal: 37,
    paddingVertical: 30,
    backgroundColor: theme.colors.white,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  success: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.gray,
  },
  paragraph: {
    marginVertical: 20,
  },
  pText: {
    color: theme.colors.gray,
  },
  time: {
    color: '#FDA718',
    fontWeight: '800',
  },
  title: {
    color: theme.colors.gray,
    fontSize: 18,
    fontWeight: 'bold',
  },
  summary: {
    paddingTop: 21,
    marginTop: 21,
    borderColor: theme.colors.gray,
    borderTopWidth: 0.2,
  },
  infoBlock: {
    marginVertical: 15,
  },
  subTitle: {
    color: theme.colors.gray,
    fontWeight: '600',
  },
  info: {
    fontSize: 13,
    color: theme.colors.gray,
    opacity: 0.5,
    marginTop: 5,
    fontWeight: '500',
  },
  priceBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 12,
    color: theme.colors.gray,
    opacity: 0.5,
    marginTop: 5,
  },
  totalBlock: {
    marginTop: 10,
    paddingTop: 5,
    borderColor: theme.colors.gray,
    borderTopWidth: 0.2,
  },
  productPrice: {
    marginVertical: 11,
  },
  detailsBlock: {
    marginVertical: 20,
  },
  button: {
    borderRadius: 15,
  },
});

export default useStyles;
