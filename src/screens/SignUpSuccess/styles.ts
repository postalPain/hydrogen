import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  flexStyle: {
    flex: 1,
  },
  safeArea: {
    ...theme.components.safeArea,
    backgroundColor: theme.colors.white,
  },
  button: {
    borderRadius: 15,
    marginBottom: 20,
  },
  content: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 27,
  },
  pageIconContainer: {
    marginTop: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 71,
    height: 71,
  },
  textContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  pageHeader: {
    marginTop: theme.spaces.xxl2,
    marginBottom: theme.spaces.s,
    textAlign: 'center',
    ...theme.fonts.spartan700,
    color: theme.colors.text,
    fontSize: 18,
    lineHeight: 30,
  },
  pageSubHeader: {
    textAlign: 'center',
    ...theme.fonts.spartan500,
    color: theme.colors.text,
    fontSize: 12,
    lineHeight: 21,
  },
});

export default useStyles;
