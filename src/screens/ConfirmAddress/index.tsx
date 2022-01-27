import React from 'react';
import {
  View, SafeAreaView, ScrollView, Pressable, KeyboardAvoidingView, Platform,
} from 'react-native';
import {
  Dropdown, Input, Button, withTheme, Text,
} from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import { useConfirmAddress } from 'screens/ConfirmAddress/useConfirmAddress';
import i18n from 'i18n';
import { DismissKeyboard } from 'components';

interface IConfirmAddressProps {
  theme: ProjectThemeType;
  route: {
    params: {
      address: string;
      geoCoords: { latitude: number; longitude: number; };
      changeAddress?: boolean;
    }
  };
}

export enum AddressType {
  Villa = 'Villa',
  Apartment = 'Apartment',
  Office = 'Office',
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
    renderOfficeForm,
    handleSubmit,
    goBack,
    errorMessage,
  } = useConfirmAddress(theme, route);

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoidingView}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 70}
        >
          <ScrollView
            style={styles.scrollContainer}
            contentContainerStyle={styles.wrapper}
          >
            <View>
              <Pressable onPress={goBack}>
                <Input
                  label={i18n.t('screens.confirmAddress.labels.mapInput')}
                  disabled
                  inputLabelStyle={styles.label}
                  value={address}
                  style={styles.input}
                  selection={{ start: 0 }}
                />
              </Pressable>
              <Dropdown
                onChange={(val) => {
                  setAddressType(val);
                  setAddressTypeError(false);
                }}
                style={styles.input}
                label={i18n.t('screens.confirmAddress.labels.address')}
                placeholder={i18n.t('screens.confirmAddress.placeholders.address')}
                data={[
                  { value: AddressType.Villa, label: i18n.t('screens.confirmAddress.addressType.villa') },
                  { value: AddressType.Apartment, label: i18n.t('screens.confirmAddress.addressType.apartment') },
                  { value: AddressType.Office, label: i18n.t('screens.confirmAddress.addressType.office') },
                ]}
                error={addressTypeError && i18n.t('screens.confirmAddress.errors.addressType')}
              />
              {addressType === AddressType.Villa && renderVillaForm()}
              {addressType === AddressType.Apartment && renderApartmentForm()}
              {addressType === AddressType.Office && renderOfficeForm()}
            </View>
            <View>
              {!!errorMessage && <Text color="red">{errorMessage}</Text>}
              <Button style={styles.button} onPress={handleSubmit}>
                {i18n.t('screens.confirmAddress.button')}
              </Button>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </DismissKeyboard>
  );
};

export default withTheme(ConfirmAddress);
