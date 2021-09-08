import { StyleSheet, Platform } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
    height: '100%',
    position: 'relative',
    flex: 1,
    backgroundColor: '#0C5268',
  },
  contentBox: {
    minHeight: '100%',
    borderRadius: 26,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: theme.spaces.xl,
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    paddingBottom: 44,
  },
  headerImage: {

  },
  headerProfileBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  headerProfileBlockLeftCol: {
    flex: 1,
  },
  headerProfileBlockRightCol: {
    display: 'flex',
    alignItems: 'flex-end',
    flex: 1,
  },
  helloText: {
    fontSize: theme.fontSizes.h2,
    lineHeight: 30,
    fontWeight: '700',
    color: '#eee',
  },
  accountButton: {
    marginTop: 5,
  },
  openHours: {
    marginTop: 10,
    marginBottom: 5,
  },
  openHoursText: {
    fontSize: 10,
    lineHeight: 30,
    fontWeight: '400',
    color: '#eee',
  },
  homeCarousel: {
    marginTop: -27,
  },
});
export default useStyles;
