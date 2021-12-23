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
    ...theme.fonts.spartan400 as any,
    fontSize: 12,
    lineHeight: 30,
    color: theme.colors.gray,
  },
  promoCode: {
    ...theme.fonts.spartan700,
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
  },
  mainLink: {
    color: theme.colors.primary,
    ...theme.fonts.spartan700 as any,
    fontSize: 14,
  },
  linkContainer: {
    marginBottom: 20,
  },
  link: {
    ...theme.fonts.spartan400 as any,
    fontSize: 14,
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
    ...theme.fonts.spartan700 as any,
    fontSize: 24,
    color: theme.colors.gray,
  },
  userName: {
    ...theme.fonts.spartan700,
    fontSize: 16,
    color: theme.colors.gray,
    marginTop: 20,
  },
});

export default useStyles;
