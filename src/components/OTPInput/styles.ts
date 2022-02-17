import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 50,
    height: 50,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: theme.sizes.radius,
    textAlign: 'center',
    ...theme.fonts.spartan500 as any,
    fontSize: 19,
  },
});

export default useStyles;
