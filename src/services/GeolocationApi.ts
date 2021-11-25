import Geolocation, { PositionError } from 'react-native-geolocation-service';
import {
  Platform,
} from 'react-native';
import axios from 'axios';
import { GOOGLE_PLACE_API_KEY } from '@env';

import i18n from 'i18n';
import {
  check, PERMISSIONS, request, RESULTS,
} from 'react-native-permissions';

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
  requestPermissions: async (onDeny?: () => void) => {
    let permissionCheck = '';
    if (Platform.OS === 'ios') {
      permissionCheck = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

      if (
        permissionCheck === RESULTS.BLOCKED
        || permissionCheck === RESULTS.DENIED
      ) {
        const permissionRequest = await request(
          PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        );
        if (permissionRequest === RESULTS.GRANTED) {
          return 'granted';
        }
        if (onDeny) onDeny();
        return 'denied';
      }
    }

    if (Platform.OS === 'android') {
      permissionCheck = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);

      if (
        permissionCheck === RESULTS.BLOCKED
        || permissionCheck === RESULTS.DENIED
      ) {
        const permissionRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        if (permissionRequest === RESULTS.GRANTED) {
          return 'granted';
        }
        if (onDeny) onDeny();
        return 'denied';
      }
    }
    return 'granted';
  },
  getCurrentPosition: (): Promise<Point> => new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(({ coords }) => {
      resolve({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    }, async ({ code, message }) => {
      if (code === PositionError.PERMISSION_DENIED) {
        console.warn(i18n.t('alerts.title'), message);
      } else if (code !== PositionError.SETTINGS_NOT_SATISFIED) {
        console.warn(i18n.t('alerts.title'), message);
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
