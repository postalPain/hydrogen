import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '@stryberventures/stryber-react-native-ui-components';
import useStyles from './styles';

const LocationButton = () => {
  const classes = useStyles();
  return (
    <TouchableOpacity style={classes.container}>
      <Text>
        {'{'}
        Location
        {'}'}
      </Text>
    </TouchableOpacity>
  );
};

export default LocationButton;
