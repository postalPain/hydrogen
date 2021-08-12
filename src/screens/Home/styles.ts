import { StyleSheet } from 'react-native';

const getStyles = (theme: any) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
    height: '100%',
  },
  scrollView: {
    paddingHorizontal: theme.spaces.m,
    backgroundColor: theme.colors.backgroundBlue,
  },

});
export default getStyles;
