import React, { useState, useEffect, useRef } from 'react';
import {
  View, Image,
} from 'react-native';
import {
  withTheme, Button, Card, Text, Input,
} from '@stryberventures/stryber-react-native-ui-components';
import { NavigationContainerRef } from '@react-navigation/native';
import MapView, {
  PROVIDER_GOOGLE, Polygon, Region,
} from 'react-native-maps';
import marker from '../../../assets/images/marker.png';

import GoogleMapApi from 'services/GoogleMapApi';
import GeolocationApi from 'services/GeolocationApi';
import getStyles from './styles';
import i18n from 'i18n';
import { Routes } from 'navigation';
import { GeoPoint } from 'components/Icons';

interface IMapProps {
  navigation: NavigationContainerRef;
  theme: any;
}

const delta = 0.015;

const areaPoints = [
  {
    latitude: 50.4462739,
    longitude: 30.5673602,
  },
  {
    latitude: 50.4452901,
    longitude: 30.568991,
  },
  {
    latitude: 50.4372547,
    longitude: 30.5738833,
  },
  {
    latitude: 50.4279056,
    longitude: 30.5861571,
  },
  {
    latitude: 50.428179,
    longitude: 30.5879595,
  },
  {
    latitude: 50.4339198,
    longitude: 30.588732,
  },
  {
    latitude: 50.4493346,
    longitude: 30.5834105,
  },
  {
    latitude: 50.4462739,
    longitude: 30.5673602,
  },
];

const MapScreen: React.FC<IMapProps> = ({ theme, navigation }) => {
  const styles: any = getStyles(theme);
  const [pointInArea, setPointInArea] = useState(true);
  const [deliveryPoint, setDeliveryPoint] = useState({
    latitude: 50.44020,
    longitude: 30.57982,
  });
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const mapRef = useRef<MapView>(null);

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
    }
  };

  useEffect(() => {
    (async () => {
      const currentPosition = await GeolocationApi.getCurrentPosition();

      const inArea = await GoogleMapApi.isPointInArea(currentPosition, areaPoints);
      if (inArea) {
        setPosition(currentPosition);
      }
      await updateAddress(currentPosition);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRegionChange = async (region: Region) => {
    setDeliveryPoint(region);
    const inArea = await GoogleMapApi.isPointInArea(region, areaPoints);
    setPointInArea(inArea);
    await updateAddress(region);
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
          <Input
            variant="simple"
            value={deliveryAddress}
            disabled
            icon={() => <GeoPoint />}
            style={styles.input}
          />
        </View>
        <View style={styles.footer}>
          {pointInArea
            ? <Button style={styles.button} onPress={() => navigation.navigate(Routes.ConfirmAddress, { address: deliveryAddress, geoCoords: deliveryPoint })}>{i18n.t('screens.map.button')}</Button>
            : (
              <Card card shadow style={styles.card}>
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
