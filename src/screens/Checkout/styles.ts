import { StyleSheet, Platform } from 'react-native';
import { ProjectThemeType } from 'theme';

const useStyles = (theme: ProjectThemeType) => StyleSheet.create({
  couponField: {
    height: 41,
    backgroundColor: theme.colors.lightGray,
    flex: 1,
    borderBottomLeftRadius: 6,
    borderTopLeftRadius: 6,
    paddingHorizontal: 15,
    marginVertical: 30,
  },
  couponContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  couponButton: {
    height: 41,
    paddingHorizontal: 0,
    borderRadius: 0,
    width: 84,
    borderBottomRightRadius: 6,
    borderTopRightRadius: 6,
  },
  couponButtonText: {
    fontSize: 12,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  contentWrapper: {
    paddingHorizontal: 37,
    paddingVertical: 27,
    paddingTop: Platform.OS === 'android' ? 50 : 27,
  },
  button: {
    borderRadius: 15,
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    color: theme.colors.gray,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    marginBottom: 18,
  },
  container: {
    backgroundColor: theme.colors.white,
  },
  priceText: {
    color: theme.colors.gray,
    fontSize: 12,
  },
  priceTotal: {
    fontSize: 14,
    fontWeight: '600',
  },
  priceSubtotal: {
    fontSize: 14,
    fontWeight: '500',
  },
  totalContainer: {
    marginTop: 5,
    paddingTop: 10,
    borderWidth: 0.5,
    borderColor: 'transparent',
    borderTopColor: theme.colors.lightGray,
  },
  disabledButtonText: {
    color: theme.colors.gray,
  },
  label: {
    color: theme.colors.black,
  },
  loadingScreen: {
    position: 'absolute',
    zIndex: 100,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  errorText: {
    marginBottom: 20,
    color: theme.colors.red,
  },
  errorTextPromo: {
    marginTop: -20,
    marginBottom: 20,
    color: theme.colors.red,
  },
});

export default useStyles;
