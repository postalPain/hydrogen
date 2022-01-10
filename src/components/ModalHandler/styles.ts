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
    borderRadius: 15,
    maxWidth: '75%',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingBottom: 38,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    lineHeight: 24,
  },
  closeButton: {
    alignSelf: 'flex-end',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 176,
    height: 44,
    borderRadius: 8,
    marginTop: 40,
  },
  settingsModalContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingVertical: 38,
    minWidth: '50%',
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  settingsButton: {
    flex: 1,
    paddingVertical: 16,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
  },
  buttonText: {
    textAlign: 'center',
  },
  denyButton: {
    borderRightWidth: 0.25,
    borderColor: '#ccc',
  },
  approveButton: {
    borderLeftWidth: 0.25,
    borderColor: '#ccc',
  },
  settingsButtonText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});

export default useStyles;
