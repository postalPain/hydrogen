import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import {
  View, Image, TouchableOpacity, Keyboard,
} from 'react-native';
import {
  withTheme, Button, Card, Text,
} from '@stryberventures/stryber-react-native-ui-components';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';
import MapView, {
  PROVIDER_GOOGLE, Polygon, Region,
} from 'react-native-maps';
import marker from '../../../assets/images/marker.png';
import locator from '../../../assets/images/locator.png';
import { areaPoints } from 'screens/Map/areaPoints';
import { isPointInPolygon } from 'geolib';

import GeolocationApi from 'services/GeolocationApi';
import getStyles from './styles';
import i18n from 'i18n';
import { Routes } from 'navigation';
import { GeoPoint } from 'components/Icons';
import { LocationErrorModal } from 'components';
import { GOOGLE_PLACE_API_KEY } from '@env';
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';

interface IMapProps {
  navigation: NavigationContainerRef;
  theme: any;
  route: {
    params: {
      changeAddress?: boolean;
    }
  }
}

const delta = 0.015;

const MapScreen: React.FC<IMapProps> = ({ theme, navigation, route }) => {
  const styles = getStyles(theme);
  const [pointInArea, setPointInArea] = useState(true);
  const [deliveryPoint, setDeliveryPoint] = useState({
    latitude: 24.469675197234857,
    longitude: 54.342443123459816,
  });
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [showLocationErrorModal, setShowLocationErrorModal] = useState(false);
  const mapRef = useRef<MapView>(null);
  const mapInputRef = useRef<GooglePlacesAutocompleteRef>(null);
  const changeAddress = route.params?.changeAddress;

  const setPosition = (position) => {
    setDeliveryPoint({
      ...position,
    });
    mapRef.current.animateToRegion({
      ...position,
      latitudeDelta: delta,
      longitudeDelta: delta,
    });
  };

  const updateAddress = async (position) => {
    const currentPositionDesc = await GeolocationApi.getAddressByPoint(position);
    if (currentPositionDesc) {
      setDeliveryAddress(currentPositionDesc.formatted_address);
      mapInputRef.current.setAddressText(currentPositionDesc.formatted_address);
    }
  };

  const setUsersCurrentLocation = async (params?: { inAreaChecking: boolean }) => {
    const geoPermission = await GeolocationApi.requestPermissions(() => {
      setShowLocationErrorModal(true);
    });

    if (geoPermission === 'granted') {
      const currentPosition = await GeolocationApi.getCurrentPosition();

      if (params?.inAreaChecking) {
        const inArea = isPointInPolygon(currentPosition, areaPoints);
        if (inArea) {
          setPosition(currentPosition);
          await updateAddress(currentPosition);
        }
      } else {
        setPosition(currentPosition);
        await updateAddress(currentPosition);
      }
    }
  };

  useEffect(() => {
    setUsersCurrentLocation({ inAreaChecking: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRegionChange = async (region: Region) => {
    setDeliveryPoint(region);
    const inArea = isPointInPolygon(region, areaPoints);
    setPointInArea(inArea);
    await updateAddress(region);
  };

  const handleLocationConfirm = () => (changeAddress
    ? navigation.dispatch(StackActions.push(Routes.ConfirmAddress,
      {
        address: deliveryAddress,
        geoCoords: deliveryPoint,
        changeAddress,
      }))
    : navigation
      .navigate(Routes.ConfirmAddress, { address: deliveryAddress, geoCoords: deliveryPoint }));

  const handleInputPress = (_, details: GooglePlaceDetail = null) => {
    if (details) {
      const { geometry: { location } } = details;
      setPosition({
        latitude: location.lat,
        longitude: location.lng,
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            style={styles.map}
            ref={mapRef}
            initialRegion={{
              ...deliveryPoint,
              latitudeDelta: delta,
              longitudeDelta: delta,
            }}
            onRegionChangeComplete={onRegionChange}
            onPress={() => Keyboard.dismiss()}
          >
            <Polygon
              coordinates={areaPoints}
              strokeColor="#0C5268"
              fillColor="rgba(12, 82, 104, 0.15)"
              strokeWidth={2}
            />
          </MapView>
          <View style={styles.markerFixed}>
            <Image style={styles.marker} source={marker} />
          </View>
          <View style={styles.header}>
            <View>
              <GeoPoint style={styles.icon} />
              <GooglePlacesAutocomplete
                placeholder={i18n.t('screens.map.search')}
                debounce={300}
                fetchDetails
                styles={{
                  textInput: styles.input,
                }}
                onPress={handleInputPress}
                query={{
                  key: GOOGLE_PLACE_API_KEY,
                  language: i18n.locale,
                }}
                ref={mapInputRef}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.locatorContainer}>
              <TouchableOpacity activeOpacity={0.7} onPress={() => setUsersCurrentLocation()}>
                <Image style={styles.locator} source={locator} />
              </TouchableOpacity>
            </View>
            {pointInArea
              ? <Button style={styles.button} onPress={handleLocationConfirm}>{i18n.t('screens.map.button')}</Button>
              : (
                <Card card shadow containerStyles={styles.cardContainer} style={styles.card}>
                  <Text semibold color="#666" size={14} style={styles.title}>{i18n.t('screens.map.message1')}</Text>
                  <Text center color="#666" size={10}>
                    {i18n.t('screens.map.message2')}
                  </Text>
                </Card>
              )}
          </View>
        </View>
      </View>
      <LocationErrorModal
        visible={showLocationErrorModal}
        onClose={() => setShowLocationErrorModal(false)}
      />
    </>
  );
};

export default withTheme(MapScreen);
