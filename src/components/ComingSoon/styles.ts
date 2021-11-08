import { StyleSheet } from 'react-native';
import { HEADER_AND_TAB_BAR_HEIGHT } from '../../constants';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_AND_TAB_BAR_HEIGHT,
    borderRadius: 27,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  contentBox: {
    width: 200,
    display: 'flex',
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
  },
  comingBox: {
    marginLeft: -42,
    display: 'flex',
    justifyContent: 'center',
    width: 160,
    height: 78,
    resizeMode: 'contain',
    marginBottom: 60,
  },
  comingBoxText: {
    marginLeft: 50,
    marginRight: 10,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 20,
    color: '#fff',
  },
  headText: {
    marginBottom: 13,
    fontSize: theme.fontSizes.headline,
    color: '#666',
  },
  descText: {
    fontSize: theme.fontSizes.small,
    lineHeight: 21,
    color: '#666',
  },
});

export default useStyles;
