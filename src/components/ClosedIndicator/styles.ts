import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  insideButton: {
    width: 72,
    height: 28,
    backgroundColor: '#F2583D',
    position: 'absolute',
    right: 8,
    top: 7,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideButtonText: {
    color: theme.colors.white,
  },
});

export default useStyles;
