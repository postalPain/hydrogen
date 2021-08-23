import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    backgroundColor: '#EEEEEE',
    borderWidth: 2,
    borderColor: '#AAAAAA',
    marginRight: 14,
  },
  categoryItemInfo: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  crossImage: {
    width: 21,
    height: 21,
  },
  itemInfoPicture: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  itemInfoRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 5,
  },
  itemInfoCol: {
    width: '50%',
  },
  buttonBox: {
    marginTop: 20,
  },
  crossButton: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 0,
    top: 0,
  },
});
export default useStyles;
