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
    paddingTop: Platform.OS === 'ios' ? 45 : 20,
    paddingBottom: 31,
  },
  headerImage: {

  },
  headerProfileBlock: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12,
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
    ...theme.fonts.spartan700 as any,
    fontSize: theme.fontSizes.h2,
    lineHeight: 30,
    color: '#eee',
  },
  accountButton: {
    marginTop: 5,
  },
  openHours: {
    marginTop: 8,
    marginBottom: 5,
  },
  openHoursText: {
    ...theme.fonts.spartan400 as any,
    fontSize: 10,
    lineHeight: 30,
    color: '#eee',
  },
  homeCarousel: {
    marginTop: -18,
  },
});
export default useStyles;
