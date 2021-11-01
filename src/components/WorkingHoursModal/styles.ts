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
  },
  button: {
    marginBottom: 12,
    alignSelf: 'flex-end',
  },
});

export default useStyles;
