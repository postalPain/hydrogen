import { StyleSheet } from 'react-native';

const useStyles = () => StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  paginationContainer: {
    paddingTop: 16,
  },
  carouselItem: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 25,
    marginRight: 25,
  },
  imageBannerWrapper: {
    width: 260,
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
  },
  imageBanner: {
    width: 260,
    height: 120,
  },
});
export default useStyles;
