import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  title: {
    color: theme.colors.gray,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  description: {
    color: theme.colors.gray,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  button: {
    width: 176,
    height: 44,
    borderRadius: 8,
  },
});

export default useStyles;
