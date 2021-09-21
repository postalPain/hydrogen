import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

// eslint-disable-next-line
const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    borderRadius: 26,
    backgroundColor: '#fff',
  },
  containerActive: {
    zIndex: 10,
  },
  tabBar: {
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
    paddingTop: 1,
    paddingBottom: 0,
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
});
export default useStyles;
