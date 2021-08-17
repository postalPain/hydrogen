import { StyleSheet, Platform } from 'react-native';

const useStyles = (theme: any) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
    height: '100%',
    position: 'relative',
    flex: 1,
  },
  contentWrapper: {
    paddingHorizontal: theme.spaces.m,
  },
  openContainer: {
    paddingVertical: theme.spaces.m,
  },
  topBackground: {
    backgroundColor: '#C4C4C4',
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    paddingBottom: 47,
  },
});
export default useStyles;
