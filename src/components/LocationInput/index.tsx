import React, {
  ForwardedRef, forwardRef, Ref, useState,
} from 'react';
import useStyles from './styles';
import { TouchableOpacity } from 'react-native';
import { Close, GeoPoint } from 'components/Icons';
import {
  GooglePlaceData, GooglePlaceDetail,
  GooglePlacesAutocomplete,
  GooglePlacesAutocompleteRef,
} from 'react-native-google-places-autocomplete';
import i18n from 'i18n';
import { GOOGLE_PLACE_API_KEY } from '@env';
import { LocationType } from 'screens/Map';
import { useForwardedRef } from 'utilities/hooks';

interface ILocationInputProps {
  defaultLocation: LocationType;
  onPress: (data: GooglePlaceData, detail: GooglePlaceDetail) => void;
}

interface IClearButtonProps {
  onPress: () => void;
}

const ClearButton: React.FC<IClearButtonProps> = ({ onPress }) => {
  const styles = useStyles();

  return (
    <TouchableOpacity onPress={onPress} style={styles.clearButton}>
      <Close />
    </TouchableOpacity>
  );
};

const LocationInput = forwardRef(
  ({ defaultLocation, onPress }: ILocationInputProps,
    ref: ForwardedRef<GooglePlacesAutocompleteRef>) => {
    const styles = useStyles();
    const innerRef: Ref<GooglePlacesAutocompleteRef> = useForwardedRef(ref);
    const clearLocationInput = () => innerRef.current?.setAddressText('');
    const [isClearButtonVisible, setClearButtonVisible] = useState(false);

    return (
      <GooglePlacesAutocomplete
        placeholder={i18n.t('screens.map.search')}
        debounce={300}
        fetchDetails
        styles={{
          textInput: styles.input,
        }}
        onPress={onPress}
        query={{
          key: GOOGLE_PLACE_API_KEY,
          language: i18n.locale,
          location: defaultLocation,
          radius: 2000,
          components: 'country:ae',
        }}
        ref={ref}
        textInputProps={{
          onFocus: () => setClearButtonVisible(true),
          onBlur: () => setClearButtonVisible(false),
          clearButtonMode: 'never',
        }}
        renderLeftButton={() => <GeoPoint style={styles.icon} />}
        renderRightButton={() => isClearButtonVisible && (
        <ClearButton
          onPress={clearLocationInput}
        />
        )}
      />
    );
  },
);

export default LocationInput;
