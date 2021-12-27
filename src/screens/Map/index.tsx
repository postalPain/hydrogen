import React, {
  useContext, useEffect, useRef, useState,
} from 'react';
import {
  Image, Keyboard, Linking, TouchableOpacity, View,
} from 'react-native';
import {
  Button,
  Card,
  Text,
  withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';
import MapView, { Polygon, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import marker from '../../../assets/images/marker.png';
import locator from '../../../assets/images/locator.png';
import { areaPoints } from 'screens/Map/areaPoints';
import { isPointInPolygon } from 'geolib';

import GeolocationApi from 'services/GeolocationApi';
import getStyles from './styles';
import i18n from 'i18n';
import { Routes } from 'navigation';
import { LocationInput } from 'components';
import {
  GooglePlaceDetail,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import { ModalContext, ModalType } from 'components/ModalProvider';

interface IMapProps {
  navigation: NavigationContainerRef;
  theme: any;
  route: {
    params: {
      changeAddress?: boolean;
    }
  }
}

export type LocationType = {
  latitude: number,
  longitude: number,
};

const defaultLocation: LocationType = {
  latitude: 24.469675197234857,
  longitude: 54.342443123459816,
};

const MapScreen: React.FC<IMapProps> = ({ theme, navigation, route }) => {
  const styles = getStyles(theme);
  const [pointInArea, setPointInArea] = useState(true);
  const [deliveryPoint, setDeliveryPoint] = useState(defaultLocation);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const { setModalData, closeModal } = useContext(ModalContext);
  const mapRef = useRef<MapView>(null);
  const mapInputRef = useRef<GooglePlacesAutocompleteRef>(null);
  const changeAddress = route.params?.changeAddress;
  let delta: 0.015 | 0.001 = 0.015;

  const setPosition = (position: LocationType) => {
    setDeliveryPoint({
      ...position,
    });
    mapRef.current.animateToRegion({
      ...position,
      latitudeDelta: delta,
      longitudeDelta: delta,
    });
  };

  const updateAddress = async (position: LocationType) => {
    const currentPositionDesc = await GeolocationApi.getAddressByPoint(position);
    if (currentPositionDesc) {
      setDeliveryAddress(currentPositionDesc.formatted_address);
      mapInputRef.current.setAddressText(currentPositionDesc.formatted_address);
    }
  };

  const setUsersCurrentLocation = async (params?: { inAreaChecking: boolean }) => {
    const geoPermission = await GeolocationApi.requestPermissions(() => {
      setModalData({
        layout: ModalType.settings,
        title: i18n.t('modals.locationError.title'),
        description: i18n.t('modals.locationError.description'),
        denyButtonText: i18n.t('modals.locationError.cancelButton'),
        onDenyButtonPress: closeModal,
        approveButtonText: i18n.t('modals.locationError.settingsButton'),
        onApproveButtonPress: () => Linking.openSettings(),
      });
    });

    if (geoPermission === 'granted') {
      const currentPosition = await GeolocationApi.getCurrentPosition();
      const inArea = isPointInPolygon(currentPosition, areaPoints);
      // zoom map if user's coords inside delivery area
      if (inArea) delta = 0.001;

      if (params?.inAreaChecking) {
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
      delta = 0.001;
      const { geometry: { location } } = details;
      setPosition({
        latitude: location.lat,
        longitude: location.lng,
      });
    }
  };

  return (
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
          <LocationInput
            defaultLocation={defaultLocation}
            ref={mapInputRef}
            onPress={handleInputPress}
          />
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
  );
};

export default withTheme(MapScreen);
