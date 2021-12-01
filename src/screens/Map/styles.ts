import { StyleSheet } from 'react-native';

const markerWidth = 43;
const markerHeight = 53;

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
    width: markerWidth,
    height: markerHeight,
  },
  markerFixed: {
    left: '50%',
    marginLeft: -markerWidth / 2,
    marginTop: -markerHeight,
    position: 'absolute',
    top: '50%',
  },
  footer: {
    bottom: 40,
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 22,
  },
  header: {
    position: 'absolute',
    top: 40,
    width: '100%',
    paddingHorizontal: 27,
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20,
  },
  button: {
    borderRadius: 15,
    width: '100%',
  },
  cardContainer: {
    width: '100%',
  },
  card: {
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    marginBottom: 5,
  },
  locator: {
    width: 60,
    height: 60,
  },
  locatorContainer: {
    alignSelf: 'flex-end',
    marginRight: -10,
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: 20,
    zIndex: 1,
  },
  input: {
    height: 55,
    paddingLeft: 40,
  },
});
export default getStyles;
