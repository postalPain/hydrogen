import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

// eslint-disable-next-line
const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  sectionTitle: {
    marginHorizontal: theme.spaces.xl,
    marginVertical: theme.spaces.m,
    fontSize: theme.fontSizes.body,
    lineHeight: 30,
    fontWeight: '700',
    color: '#666',
  },
  tabBar: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 15,
    elevation: 15,
    shadowOpacity: 0.54,
  },
  tabBarTab: {
    width: 'auto',
    borderWidth: 0,
    paddingTop: 12,
    paddingBottom: 13,
    paddingHorizontal: 11,
  },
  tabBarLabel: {
    margin: 0,
    fontSize: 12,
    lineHeight: 30,
    fontWeight: '500',
    color: '#666',
  },
  tabBarLabelActive: {
    fontWeight: '700',
  },
  messageBox: {
    padding: theme.spaces.xl,
  },
  productsRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    paddingLeft: theme.spaces.m,
  },
});
export default useStyles;
