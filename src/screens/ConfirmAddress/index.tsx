import React from 'react';
import {
  View, SafeAreaView, ScrollView, Pressable,
} from 'react-native';
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
    goBack,
  } = useConfirmAddress(theme, route);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.wrapper}>
        <View>
          <Pressable onPress={goBack}>
            <Input
              label="Delivery address"
              disabled
              placeholder={address}
              style={styles.input}
            />
          </Pressable>
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
        <Button style={styles.button} onPress={handleSubmit}>
          {i18n.t('screens.confirmAddress.button')}
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default withTheme(ConfirmAddress);
