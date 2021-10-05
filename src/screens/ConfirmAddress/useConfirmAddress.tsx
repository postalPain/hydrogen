import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { ApartmentSchema, VillaSchema } from 'utilities/validationSchemas';
import { ProjectThemeType } from 'theme';
import { View } from 'react-native';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import useStyles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'navigation';

export const useConfirmAddress = (theme: ProjectThemeType, route) => {
  const styles = useStyles(theme);
  const [addressType, setAddressType] = useState(null);
  const [addressTypeError, setAddressTypeError] = useState(false);
  const villaFormRef = useRef(null);
  const apartmentFormRef = useRef(null);
  const { goBack, navigate } = useNavigation();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { params: { address, geoCoords } } = route;

  const handleFormSubmit = () => navigate(Routes.TabNavigation);

  const renderVillaForm = () => (
    <Formik
      innerRef={villaFormRef}
      initialValues={{
        buildingName: '', houseNum: '',
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
            value={values.buildingName}
            onChange={handleChange('buildingName')}
            error={submitCount > 0 ? errors.buildingName : undefined}
          />
          <Input
            variant="simple"
            style={styles.input}
            label="House No."
            value={values.houseNum}
            onChange={handleChange('houseNum')}
            error={submitCount > 0 ? errors.houseNum : undefined}
          />
        </View>
      )}
    </Formik>
  );

  const renderApartmentForm = () => (
    <Formik
      innerRef={apartmentFormRef}
      initialValues={{
        buildingName: '', floor: '', apartmentNum: '',
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
            value={values.buildingName}
            onChange={handleChange('buildingName')}
            error={submitCount > 0 ? errors.buildingName : undefined}
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
            onChange={handleChange('apartmentNum')}
            error={submitCount > 0 ? errors.apartmentNum : undefined}
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
  };
};
