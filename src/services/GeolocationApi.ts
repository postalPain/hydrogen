import Geolocation, { PositionError } from 'react-native-geolocation-service';
import {
  Alert,
  Linking,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import axios from 'axios';
import { GOOGLE_PLACE_API_KEY } from '@env';

import i18n from 'i18n';

type Point = {
  latitude: number;
  longitude: number;
};
type GAddressResult = {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    },
  };
};

const mapsGoogleXHR = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api',
  params: {
    key: GOOGLE_PLACE_API_KEY,
  },
});

const GeolocationApi = {
  requestPermissions: async () => {
    let status = '';
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);
      status = result['android.permission.ACCESS_FINE_LOCATION'];
    } else {
      status = await Geolocation.requestAuthorization('whenInUse');
    }

    if (status !== 'granted') {
      Alert.alert(
        i18n.t('alerts.title'),
        i18n.t('alerts.messages.locationPermissionRequestFailed'),
        [{
          text: i18n.t('alerts.buttons.ok'),
        }],
      );
    }

    return status;
  },
  getCurrentPosition: (): Promise<Point> => new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(({ coords }) => {
      resolve({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    }, async ({ code, message }) => {
      if (code === PositionError.PERMISSION_DENIED) {
        Alert.alert(
          i18n.t('alerts.title'),
          i18n.t('alerts.messages.locationPermissionsAreNotGranted'),
          [{
            text: i18n.t('alerts.buttons.cancel'),
          }, {
            text: i18n.t('alerts.buttons.proceedToSettings'),
            onPress: () => {
              Linking.openSettings();
            },
          }],
        );
      } else if (code !== PositionError.SETTINGS_NOT_SATISFIED) {
        Alert.alert(i18n.t('alerts.title'), message);
      }
      reject();
    },
    { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 });
  }),
  getAddressByPoint: ({ latitude, longitude }: Point) => mapsGoogleXHR({
    method: 'get',
    url: '/geocode/json',
    params: {
      latlng: `${latitude}, ${longitude}`,
      location_type: 'ROOFTOP',
      result_type: 'street_address',
    },
  }).then(({ data }): GAddressResult => (data.results && data.results[0] || null)),
};

export default GeolocationApi;
