import { StyleSheet } from 'react-native';

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
    fontSize: 14,
    lineHeight: 30,
    fontWeight: '500',
    color: '#666',
    marginLeft: 13,
  },
});
export default useStyles;
