import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  title: {
    ...theme.fonts.spartan700 as any,
    color: theme.colors.text,
    fontSize: 18,
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
    ...theme.fonts.spartan400,
    fontSize: 16,
    color: theme.colors.text,
    marginLeft: 20,
  },
  bottomOptionContainer: {
    borderWidth: 0.2,
    borderColor: 'transparent',
    borderTopColor: theme.colors.gray,
  },
});

export default useStyles;
