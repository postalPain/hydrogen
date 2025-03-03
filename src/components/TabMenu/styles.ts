import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {},
  rulerWrapper: {},
  ruler: {
    display: 'flex',
    flexDirection: 'row',
  },
  menuItemContainer: {},
  menuItem: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  menuItemText: {
    fontSize: 14,
    lineHeight: 30,
    ...theme.fonts.spartan700 as any,
    color: '#eee',
  },
  menuItemActive: {},
  menuItemTextActive: {
    textDecorationLine: 'underline',
  },
});

export default useStyles;
