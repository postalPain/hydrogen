import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(11, 11, 11, 0.45)',
  },
  modalContainer: {
    backgroundColor: theme.colors.white,
    paddingVertical: 38,
    paddingHorizontal: 28,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '75%',
  },
});

export default useStyles;
