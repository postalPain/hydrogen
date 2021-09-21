import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

// eslint-disable-next-line
const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {},
  tabBarTab: {
    width: 'auto',
    paddingVertical: 8,
    paddingHorizontal: 11,
  },
  tabBarLabel: {
    margin: 0,
    fontSize: 14,
    lineHeight: 30,
    fontWeight: '700',
    color: '#eee',
  },
  tabBarLabelActive: {
    textDecorationLine: 'underline',
  },
  categoriesBox: {
    flex: 1,
    position: 'relative',
  },
  messageBox: {
    ...theme.components.contentBox,
    flex: 1,
    padding: 24,
  },
});
export default useStyles;
