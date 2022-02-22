import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  containerButton: {
    paddingVertical: 8,
    paddingHorizontal: 19,
    borderRadius: 26,
    backgroundColor: 'rgba(12, 82, 104, 0.1)',
  },
  containerCounter: {
    paddingVertical: 8,
    paddingHorizontal: 19,
  },
  counterText: {
    ...theme.fonts.openSans600 as any,
    fontSize: 14,
    lineHeight: 19,
    color: '#808080',
  },
  buttonText: {
    ...theme.fonts.openSans600 as any,
    fontSize: 14,
    lineHeight: 19,
    color: theme.colors.primary,
  },
});

export default useStyles;
