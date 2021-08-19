import { StyleSheet } from 'react-native';

const getStyles = (theme: any) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
    height: '100%',
  },
  mapContainer: {
    height: 600,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default getStyles;
