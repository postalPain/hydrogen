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
    ...theme.fonts.spartan700 as any,
    fontSize: 18,
    color: theme.colors.text,
    marginBottom: 20,
  },
  description: {
    ...theme.fonts.spartan500 as any,
    color: theme.colors.text,
    fontSize: 12,
    lineHeight: 21,
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
