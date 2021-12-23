import { StyleSheet } from 'react-native';
import theme from 'styles/theme';

const useStyles = () => StyleSheet.create({
  whatsappLogo: {
    width: 67,
    height: 67,
  },
  whatsappBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phone: {
    marginLeft: 5,
    ...theme.fonts.spartan700 as any,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  container: {
    marginBottom: 40,
    marginLeft: 15,
  },
});

export default useStyles;
