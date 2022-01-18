import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  title: {
    ...theme.fonts.spartan700 as any,
    color: theme.colors.text,
    fontSize: 18,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 0.2,
    borderColor: theme.colors.gray,
  },
  cardNumContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNum: {
    flexDirection: 'row',
  },
  cardTitle: {
    ...theme.fonts.spartan600 as any,
    color: theme.colors.text,
    fontSize: 12,
    marginBottom: 5,
  },
  card: {
    ...theme.fonts.spartan600 as any,
    color: '#ccc',
    fontSize: 12,
  },
  cardWrapper: {
    marginLeft: 15,
  },
  image: {
    marginLeft: 15,
  },
  lastCardContainer: {
    borderBottomWidth: 0,
  },
});

export default useStyles;
