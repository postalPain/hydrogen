import React from 'react';
import { View, SafeAreaView } from 'react-native';
import {
  Dropdown, Input, Button, withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import { useConfirmAddress } from 'screens/ConfirmAddress/useConfirmAddress';
import i18n from 'i18n';

interface IConfirmAddressProps {
  theme: ProjectThemeType;
  route: any;
}

const ConfirmAddress: React.FC<IConfirmAddressProps> = ({ theme, route }) => {
  const {
    styles,
    address,
    setAddressType,
    setAddressTypeError,
    addressTypeError,
    addressType,
    renderVillaForm,
    renderApartmentForm,
    handleSubmit,
  } = useConfirmAddress(theme, route);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <Input
            label="Delivery address"
            disabled
            placeholder={address}
            style={styles.input}
          />
          <Dropdown
            onChange={(val) => {
              setAddressType(val);
              setAddressTypeError(false);
            }}
            style={styles.input}
            label="Address type"
            placeholder="Choose type"
            data={[
              { value: 'Villa', label: 'Villa' },
              { value: 'Apartment', label: 'Apartment' },
            ]}
            error={addressTypeError && i18n.t('screens.confirmAddress.errors.addressType')}
          />
          {addressType === 'Villa' && renderVillaForm()}
          {addressType === 'Apartment' && renderApartmentForm()}
        </View>
        <Button style={styles.button} onPress={handleSubmit}>{i18n.t('screens.confirmAddress.button')}</Button>
      </View>
    </SafeAreaView>
  );
};

export default withTheme(ConfirmAddress);
