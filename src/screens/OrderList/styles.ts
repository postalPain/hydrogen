import { StyleSheet, Platform } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  safeArea: {
    ...theme.components.safeArea,
    backgroundColor: theme.colors.white,
  },
  scrollView: {
    backgroundColor: theme.colors.white,
  },
  container: {
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 22 : 44,
    paddingBottom: 22,
    backgroundColor: theme.colors.white,
  },
  title: {
    ...theme.fonts.spartan800,
    color: theme.colors.text,
    fontSize: 18,
    marginLeft: 20,
  },
  noOrderContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  bagIcon: {
    width: 71,
    height: 71,
    borderRadius: 35.5,
    backgroundColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    ...theme.fonts.spartan400,
    textAlign: 'center',
    color: theme.colors.text,
    fontSize: 16,
    marginTop: 30,
  },
  card: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  subTitle: {
    ...theme.fonts.spartan700 as any,
    fontSize: 12,
    color: theme.colors.text,
    fontWeight: 'bold',
  },
  content: {
    ...theme.fonts.spartan400 as any,
    fontSize: 12,
    color: theme.colors.text,
    marginTop: 7,
  },
  status: {
    ...theme.fonts.spartan400 as any,
    fontSize: 12,
    color: '#B4BC48',
    marginTop: 10,
  },
  statusContainer: {
    alignItems: 'center',
  },
  contentWrapper: {
    maxWidth: '70%',
  },
});

export default useStyles;
