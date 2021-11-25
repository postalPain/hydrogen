import { StyleSheet } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  modal: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    paddingTop: 0,
  },
  contentWrapper: {
    paddingHorizontal: 28,
    paddingVertical: 32,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 24,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderTopWidth: 0.5,
    borderColor: '#ccc',
  },
  buttonText: {
    textAlign: 'center',
  },
  cancelButton: {
    borderRightWidth: 0.25,
    borderColor: '#ccc',
  },
  settingsButton: {
    borderLeftWidth: 0.25,
    borderColor: '#ccc',
  },
  settingsButtonText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});

export default useStyles;
