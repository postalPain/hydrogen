import { Platform, StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';
import { TAB_BAR_HEIGHT } from 'constants/';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    height: TAB_BAR_HEIGHT,
    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
    backgroundColor: theme.colors.primary,
  },
  iconsWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  leftCorner: {
    position: 'absolute',
    left: 0,
    top: -22,
  },
  rightCorner: {
    transform: [{ rotateY: '180deg' }],
    position: 'absolute',
    right: 0,
    top: -22,
  },
});

export default useStyles;
