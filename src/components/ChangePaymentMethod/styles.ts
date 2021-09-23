import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  title: {
    color: theme.colors.gray,
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 30,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    color: theme.colors.gray,
    marginLeft: 20,
  },
  bottomOptionContainer: {
    borderWidth: 0.2,
    borderColor: 'transparent',
    borderTopColor: theme.colors.gray,
  },
});

export default useStyles;
