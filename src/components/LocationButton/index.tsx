import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { LocationIcon } from 'components/Icons';
import ClosedIndicator from 'components/ClosedIndicator';
import useStyles from './styles';

interface ILocationButton {
  location?: string;
  onPress: () => void;
}

const LocationButton: React.FC<ILocationButton> = (props) => {
  const styles = useStyles();
  const location = props.location || i18n.t('components.locationButton.defaultLocation');

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={props.onPress}
    >
      <LocationIcon />
      <Text
        style={styles.locationText}
        numberOfLines={1}
      >
        {location}
      </Text>
      <ClosedIndicator />
    </TouchableOpacity>
  );
};

export default LocationButton;
