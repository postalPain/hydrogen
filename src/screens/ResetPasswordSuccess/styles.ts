import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 32,
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: theme.colors.gray,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    color: theme.colors.gray,
    fontWeight: '500',
    fontSize: 13,
  },
  button: {
    borderRadius: 15,
  },
  contentContainer: {
    alignItems: 'center',
  },
  icon: {
    marginVertical: 44,
  },
});

export default useStyles;
