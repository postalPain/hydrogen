import { StyleSheet } from 'react-native';

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
    fontSize: 15,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default useStyles;
