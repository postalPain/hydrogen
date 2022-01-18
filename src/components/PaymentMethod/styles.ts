import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  linkButton: {
    paddingHorizontal: 0,
  },
  linkButtonText: {
    textDecorationLine: 'underline',
    color: theme.colors.primary,
    fontSize: 12,
  },
  linkButtonMargin: {
    marginTop: 12,
  },
  title: {
    ...theme.fonts.spartan700 as any,
    fontSize: 18,
    color: theme.colors.text,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    color: theme.colors.gray,
    fontSize: 14,
    marginLeft: 13,
  },
  container: {
    marginBottom: 30,
  },
});

export default useStyles;
