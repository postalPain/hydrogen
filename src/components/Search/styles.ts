import { StyleSheet } from 'react-native';
import { HEADER_AND_TAB_BAR_HEIGHT } from '../../constants';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    flex: 1,
    marginTop: HEADER_AND_TAB_BAR_HEIGHT,
    borderRadius: 27,
    display: 'flex',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    borderWidth: 0,
    borderColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  inputContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingHorizontal: 20,
  },
  productWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    paddingTop: theme.spaces.m,
    paddingLeft: theme.spaces.m,
  },
  resultContainer: {
    marginTop: 20,
  },
  messageContainer: {
    marginTop: 50,
    alignItems: 'center',
  },
});

export default useStyles;
