import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { ApartmentSchema, VillaSchema } from 'utilities/validationSchemas';
import { ProjectThemeType } from 'theme';
import { View } from 'react-native';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import useStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addAddress } from 'store/user/actions';
import { userErrorSelector } from 'store/user/selectors';

export const useConfirmAddress = (theme: ProjectThemeType, route) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const [addressType, setAddressType] = useState(null);
  const [addressTypeError, setAddressTypeError] = useState(false);
  const villaFormRef = useRef(null);
  const apartmentFormRef = useRef(null);
  const { goBack } = useNavigation();
  const errorMessage = useSelector(userErrorSelector);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { params: { address, geoCoords: { latitude, longitude } } } = route;

  const handleFormSubmit = (values) => {
    dispatch(addAddress({
      ...values,
      type: addressType === 'Villa' ? 'villa' : 'apartment',
      full_address: address,
      latitude,
      longitude,
    }));
  };

  const renderVillaForm = () => (
    <Formik
      innerRef={villaFormRef}
      initialValues={{
        building_name: '', house_number: '',
      }}
      onSubmit={handleFormSubmit}
      validationSchema={VillaSchema}
    >
      {({
        handleChange,
        values,
        errors,
        submitCount,
      }) => (
        <View>
          <Input
            variant="simple"
            style={styles.input}
            label="Building name"
            value={values.building_name}
            onChange={handleChange('building_name')}
            error={submitCount > 0 ? errors.building_name : undefined}
          />
          <Input
            variant="simple"
            style={styles.input}
            label="House No."
            value={values.house_number}
            onChange={handleChange('house_number')}
            error={submitCount > 0 ? errors.house_number : undefined}
          />
        </View>
      )}
    </Formik>
  );

  const renderApartmentForm = () => (
    <Formik
      innerRef={apartmentFormRef}
      initialValues={{
        building_name: '', floor: '', apartment_number: '',
      }}
      onSubmit={handleFormSubmit}
      validationSchema={ApartmentSchema}
    >
      {({
        handleChange,
        values,
        errors,
        submitCount,
      }) => (
        <View>
          <Input
            variant="simple"
            style={styles.input}
            label="Building name"
            value={values.building_name}
            onChange={handleChange('building_name')}
            error={submitCount > 0 ? errors.building_name : undefined}
          />
          <Input
            variant="simple"
            style={styles.input}
            label="Floor"
            value={values.floor}
            onChange={handleChange('floor')}
            error={submitCount > 0 ? errors.floor : undefined}
          />
          <Input
            variant="simple"
            label="Apartment No."
            value={values.apartmentNum}
            onChange={handleChange('apartment_number')}
            error={submitCount > 0 ? errors.apartment_number : undefined}
          />
        </View>
      )}
    </Formik>
  );

  // eslint-disable-next-line consistent-return
  const handleSubmit = () => {
    const villaForm = villaFormRef.current;
    const apartmentForm = apartmentFormRef.current;

    if (!addressType) {
      return setAddressTypeError(true);
    }

    if (villaForm && addressType === 'Villa') {
      villaForm.handleSubmit();
    }

    if (apartmentForm && addressType === 'Apartment') {
      apartmentForm.handleSubmit();
    }
  };

  return {
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
    errorMessage,
  };
};
