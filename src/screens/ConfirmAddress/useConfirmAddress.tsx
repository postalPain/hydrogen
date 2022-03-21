import React, { useRef, useState, useEffect } from 'react';
import { Formik } from 'formik';
import { ApartmentSchema, OfficeSchema, VillaSchema } from 'utilities/validationSchemas';
import { ProjectThemeType } from 'theme';
import { View } from 'react-native';
import { Input } from '@stryberventures/stryber-react-native-ui-components';
import useStyles from './styles';
import {
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { updateAddress, saveAddressClearError } from 'store/user/actions';
import {
  deliveryAddressLoadingSelector,
  deliveryAddressErrorSelector,
} from 'store/user/selectors';
import { Routes } from 'navigation';
import i18n from 'i18n';
import { AddressType } from 'screens/ConfirmAddress/index';
import { RootStackParamList } from 'navigation/types';

type ConfirmAddressRouteProp = RouteProp<RootStackParamList, Routes.ConfirmAddress>;

export const useConfirmAddress = (theme: ProjectThemeType) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const route = useRoute<ConfirmAddressRouteProp>();
  const [addressType, setAddressType] = useState<keyof typeof AddressType>(null);
  const [addressTypeError, setAddressTypeError] = useState(false);
  const villaFormRef = useRef(null);
  const apartmentFormRef = useRef(null);
  const officeFormRef = useRef(null);
  const { goBack } = useNavigation();
  const errorMessage = useSelector(deliveryAddressErrorSelector);
  const loading = useSelector(deliveryAddressLoadingSelector);
  const { params: { address, geoCoords: { latitude, longitude }, nextScreen } } = route;

  const handleFormSubmit = (values) => {
    const addressDetails = {
      ...values,
      type: addressType.toLowerCase(),
      full_address: address,
      latitude,
      longitude,
    };

    dispatch(updateAddress({
      address: addressDetails,
      nextScreen,
    }));
  };

  const renderVillaForm = () => (
    <Formik
      innerRef={villaFormRef}
      initialValues={{
        building_name: '', house_number: '', landmark: '',
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
            label={i18n.t('screens.confirmAddress.labels.buildingName')}
            value={values.building_name}
            onChange={handleChange('building_name')}
            error={submitCount > 0 ? errors.building_name : undefined}
          />
          <Input
            variant="simple"
            style={styles.input}
            label={i18n.t('screens.confirmAddress.labels.house')}
            value={values.house_number}
            onChange={handleChange('house_number')}
            error={submitCount > 0 ? errors.house_number : undefined}
          />
          <Input
            variant="simple"
            label={i18n.t('screens.confirmAddress.labels.landmark')}
            value={values.landmark}
            placeholder={i18n.t('screens.confirmAddress.placeholders.landmark')}
            onChange={handleChange('landmark')}
            error={submitCount > 0 ? errors.landmark : undefined}
          />
        </View>
      )}
    </Formik>
  );

  const renderApartmentForm = () => (
    <Formik
      innerRef={apartmentFormRef}
      initialValues={{
        building_name: '', floor: '', apartment_number: '', landmark: '',
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
            label={i18n.t('screens.confirmAddress.labels.buildingName')}
            value={values.building_name}
            onChange={handleChange('building_name')}
            error={submitCount > 0 ? errors.building_name : undefined}
          />
          <Input
            variant="simple"
            style={styles.input}
            label={i18n.t('screens.confirmAddress.labels.floor')}
            value={values.floor}
            onChange={handleChange('floor')}
            error={submitCount > 0 ? errors.floor : undefined}
          />
          <Input
            variant="simple"
            label={i18n.t('screens.confirmAddress.labels.apartment')}
            value={values.apartmentNum}
            style={styles.input}
            onChange={handleChange('apartment_number')}
            error={submitCount > 0 ? errors.apartment_number : undefined}
          />
          <Input
            variant="simple"
            label={i18n.t('screens.confirmAddress.labels.landmark')}
            value={values.landmark}
            placeholder={i18n.t('screens.confirmAddress.placeholders.landmark')}
            onChange={handleChange('landmark')}
            error={submitCount > 0 ? errors.landmark : undefined}
          />
        </View>
      )}
    </Formik>
  );

  const renderOfficeForm = () => (
    <Formik
      innerRef={officeFormRef}
      initialValues={{
        building_name: '', floor: '', company_name: '', landmark: '',
      }}
      onSubmit={handleFormSubmit}
      validationSchema={OfficeSchema}
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
            label={i18n.t('screens.confirmAddress.labels.buildingName')}
            value={values.building_name}
            onChange={handleChange('building_name')}
            error={submitCount > 0 ? errors.building_name : undefined}
          />
          <Input
            variant="simple"
            style={styles.input}
            label={i18n.t('screens.confirmAddress.labels.floor')}
            value={values.floor}
            onChange={handleChange('floor')}
            error={submitCount > 0 ? errors.floor : undefined}
          />
          <Input
            variant="simple"
            label={i18n.t('screens.confirmAddress.labels.company')}
            value={values.company_name}
            onChange={handleChange('company_name')}
            style={styles.input}
            error={submitCount > 0 ? errors.company_name : undefined}
          />
          <Input
            variant="simple"
            label={i18n.t('screens.confirmAddress.labels.landmark')}
            value={values.landmark}
            placeholder={i18n.t('screens.confirmAddress.placeholders.landmark')}
            onChange={handleChange('landmark')}
            error={submitCount > 0 ? errors.landmark : undefined}
          />
        </View>
      )}
    </Formik>
  );

  // eslint-disable-next-line consistent-return
  const handleSubmit = () => {
    const villaForm = villaFormRef.current;
    const apartmentForm = apartmentFormRef.current;
    const officeForm = officeFormRef.current;

    if (!addressType) {
      return setAddressTypeError(true);
    }

    if (villaForm && addressType === AddressType.Villa) {
      villaForm.handleSubmit();
    }

    if (apartmentForm && addressType === AddressType.Apartment) {
      apartmentForm.handleSubmit();
    }

    if (officeFormRef && addressType === AddressType.Office) {
      officeForm.handleSubmit();
    }
  };

  useEffect(() => () => {
    dispatch(saveAddressClearError());
  }, []);

  return {
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
    loading,
  };
};
