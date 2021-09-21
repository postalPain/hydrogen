import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginHorizontal: theme.spaces.xl,
    marginVertical: theme.spaces.m,
    fontSize: theme.fontSizes.body,
    lineHeight: 30,
    fontWeight: '700',
    color: '#666',
  },
  boxProductItems: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: theme.spaces.m,
  },
  messageBox: {
    padding: theme.spaces.xl,
  },
});
export default useStyles;
