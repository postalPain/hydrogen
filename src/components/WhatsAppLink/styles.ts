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
  container: {
    marginBottom: 40,
    marginLeft: 15,
  },
});

export default useStyles;
