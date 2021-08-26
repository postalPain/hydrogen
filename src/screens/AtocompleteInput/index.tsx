import React from 'react';
import useStyles from './styles';
import { View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACE_API_KEY } from '@env';
import i18n from 'i18n';

const AutocompleteInput: React.FC = () => {
  const classes = useStyles();

  return (
    <View style={classes.container}>
      <GooglePlacesAutocomplete
        placeholder={i18n.t('screens.map.search')}
        debounce={300}
        fetchDetails
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        onFail={(error) => console.error(error)}
        query={{
          key: GOOGLE_PLACE_API_KEY,
          language: i18n.locale,
        }}
      />
    </View>
  );
};

export default AutocompleteInput;
