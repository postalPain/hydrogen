import { StyleSheet } from 'react-native';
import theme from 'styles/theme';

const useStyles = () => StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
    paddingHorizontal: 15,
    borderRadius: 4,
    backgroundColor: '#fff',
  },
  locationText: {
    marginTop: 5,
    ...theme.fonts.spartan500 as any,
    fontSize: 14,
    lineHeight: 18,
    color: '#666',
    marginLeft: 13,
  },
});
export default useStyles;
