import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  title: {
    color: theme.colors.gray,
    fontSize: 20,
    fontWeight: 'bold',
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
    color: theme.colors.gray,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  card: {
    color: '#ccc',
    fontSize: 14,
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
