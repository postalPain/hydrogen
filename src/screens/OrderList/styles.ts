import { StyleSheet } from 'react-native';
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
    paddingTop: 22,
    paddingBottom: 22,
    backgroundColor: theme.colors.white,
  },
  title: {
    color: theme.colors.gray,
    fontSize: 18,
    fontWeight: 'bold',
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
    textAlign: 'center',
    color: theme.colors.gray,
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
    color: theme.colors.gray,
    fontWeight: 'bold',
  },
  content: {
    color: theme.colors.gray,
    marginTop: 7,
  },
  status: {
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
