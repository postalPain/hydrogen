import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 15,
    borderTopColor: theme.colors.primary,
  },
  title: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 13,
    color: theme.colors.gray,
  },
  promoCode: {
    fontWeight: '700',
    color: '#FDA718',
    marginTop: 10,
  },
  headerContainer: {
    paddingBottom: 35,
    borderBottomWidth: 0.25,
    borderBottomColor: theme.colors.gray,
    paddingHorizontal: 28,
  },
  menuContainer: {
    marginTop: 32,
    paddingHorizontal: 28,
    height: '100%',
    justifyContent: 'space-between',
    marginBottom: -40,
  },
  mainLink: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
  linkContainer: {
    marginBottom: 15,
  },
  link: {
    color: theme.colors.gray,
  },
  avatar: {
    width: 70,
    height: 70,
    backgroundColor: '#C4C4C4',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.gray,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: theme.colors.gray,
    marginTop: 20,
  },
});

export default useStyles;
