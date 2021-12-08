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
    scrollViewHeight,
    isKeyboardOpened,
    setIsKeyboardOpened,
  } = useConfirmAddress(theme, route);

  const onScrollViewLayout = (e) => {
    const layoutHeight = e.nativeEvent.layout.height;
    if (!scrollViewHeight.current) {
      scrollViewHeight.current = e.nativeEvent.layout.height;
      // 50 - small hack for iOS, as layout happens twice
    } else if (scrollViewHeight.current > layoutHeight + 50) {
      setIsKeyboardOpened(true);
    } else {
      setIsKeyboardOpened(false);
    }
  };

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
            contentContainerStyle={[
              styles.wrapper,
              isKeyboardOpened ? styles.wrapperKeyboardOpened : {},
            ]}
            onLayout={onScrollViewLayout}
          >
            <View>
              <Pressable onPress={goBack}>
                <Input
                  label="Delivery address"
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
                label="Address type"
                placeholder="Choose type"
                data={[
                  { value: 'Villa', label: 'Villa' },
                  { value: 'Apartment', label: 'Apartment' },
                  { value: 'Office', label: 'Office' },
                ]}
                error={addressTypeError && i18n.t('screens.confirmAddress.errors.addressType')}
              />
              {addressType === 'Villa' && renderVillaForm()}
              {addressType === 'Apartment' && renderApartmentForm()}
              {addressType === 'Office' && renderOfficeForm()}
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
