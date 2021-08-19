import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { NavigationContainerRef } from '@react-navigation/native';
import MapView, { PROVIDER_GOOGLE, Polygon, Marker } from 'react-native-maps';

import GoogleMapApi from 'services/GoogleMapApi';
import getStyles from './styles';

interface IMapProps {
  navigation: NavigationContainerRef;
  theme: any;
}

const MapScreen: React.FC<IMapProps> = ({ theme }) => {
  const styles: any = getStyles(theme);
  const [pointInArea, setPointInArea] = useState(false);

  const deliverPoint = {
    latitude: 50.44164,
    longitude: 30.57756,
  };
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

  useEffect(() => {
    GoogleMapApi.isPointInArea(deliverPoint, areaPoints).then((inArea) => {
      setPointInArea(inArea);
    });
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>
          { `point (${deliverPoint.latitude}, ${deliverPoint.longitude}) is ${pointInArea ? '' : 'not'} in area` }
        </Text>
      </View>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 50.426391281141285,
            longitude: 30.538422876376057,
            latitudeDelta: 0.15,
            longitudeDelta: 0.15,
          }}
        >
          <Polygon
            coordinates={areaPoints}
            strokeColor="#000"
            fillColor="rgba(255,0,0,0.5)"
            strokeWidth={1}
          />
          <Marker coordinate={deliverPoint} />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default withTheme(MapScreen);
