import { StyleSheet } from 'react-native';

const getStyles = (theme: any) => StyleSheet.create({
  container: {
    ...theme.components.safeArea,
    height: '100%',
  },
  mapContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    height: 48,
    width: 48,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -24,
    marginTop: -48,
    position: 'absolute',
    top: '50%',
  },
  footer: {
    bottom: 40,
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
  },
  button: {
    width: '80%',
    borderRadius: 15,
  },
  card: {
    paddingVertical: 15,
    paddingHorizontal: 34,
    marginHorizontal: 33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 5,
  },
});
export default getStyles;
