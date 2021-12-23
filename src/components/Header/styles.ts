import { StyleSheet, Platform } from 'react-native';
import { HEADER_HEIGHT } from '../../constants';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    height: Platform.OS === 'ios' ? HEADER_HEIGHT : HEADER_HEIGHT - 24,
  },
  headerLine: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  headerRightSide: {
    transform: [{ rotateY: '180deg' }, { rotateX: '180deg' }],
  },
  headerLeftSide: {
    transform: [{ rotateX: '180deg' }],
  },
  contentWrapper: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 15 : 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.white,
    ...theme.fonts.spartan600 as any,
    fontSize: 18,
    lineHeight: 24,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    height: '100%',
    justifyContent: 'center',
    width: 40,
    alignItems: 'center',
  },
});

export default useStyles;
