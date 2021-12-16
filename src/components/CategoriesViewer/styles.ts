import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 14,
    paddingRight: 5,
  },
  emptyListBox: {
    marginVertical: 40,
    paddingHorizontal: 24,
  },
  emptyListText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default useStyles;
