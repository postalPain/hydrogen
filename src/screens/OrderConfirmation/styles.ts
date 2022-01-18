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
    ...theme.fonts.spartan700 as any,
    fontSize: 16,
    color: theme.colors.text,
  },
  paragraph: {
    marginVertical: 20,
  },
  pText: {
    ...theme.fonts.spartan400 as any,
    color: theme.colors.text,
  },
  time: {
    color: '#FDA718',
    ...theme.fonts.spartan800 as any,
  },
  title: {
    color: theme.colors.text,
    fontSize: 18,
    ...theme.fonts.spartan700 as any,
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
    color: theme.colors.text,
    ...theme.fonts.spartan600 as any,
  },
  info: {
    ...theme.fonts.spartan500 as any,
    fontSize: 13,
    color: theme.colors.text,
    opacity: 0.5,
    marginTop: 5,
  },
  priceBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    ...theme.fonts.spartan400,
    fontSize: 12,
    color: theme.colors.text,
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
