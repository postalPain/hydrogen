import { Platform, StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
  },
  tabBarLine: {
    position: 'absolute',
    left: 0,
    bottom: 0,
  },
  tabRightSide: {
    transform: [{ rotateY: '180deg' }],
  },
  iconsWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
});

export default useStyles;
