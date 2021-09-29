import React from 'react';
import useStyles from './styles';
import { Image, View } from 'react-native';
import {
  Button, Checkbox, Input, Text,
} from '@stryberventures/stryber-react-native-ui-components';
import { BottomSheetTextInput, useBottomSheet } from '@gorhom/bottom-sheet';
import masterCard from '../../../assets/images/mc.jpg';
import visa from '../../../assets/images/visa.png';
import cvc from '../../../assets/images/cvc.png';
import { Formik } from 'formik';
import { CardSchema } from 'utilities/validationSchemas';
import i18n from 'i18n';
import { useDispatch } from 'react-redux';
import { addCard } from 'store/user/actions';

const PaymentCardForm: React.FC = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const { close } = useBottomSheet();

  const checkCard = (cardNum: string) => {
    if (cardNum[0] === '5') {
      return <Image source={masterCard} />;
    }
    if (cardNum[0] === '4') {
      return <Image source={visa} />;
    }
    return null;
  };

  return (
    <Formik
      initialValues={{
        card: '', expDate: '', cvc: '',
      }}
      onSubmit={(values) => {
        const [expMonth, expYear] = values.expDate.split('/');
        dispatch(addCard({
          number: values.card,
          exp_month: expMonth,
          exp_year: expYear,
          cvc: values.cvc,
        }));
        close();
      }}
      validationSchema={CardSchema}
    >
      {({
        handleChange,
        handleSubmit,
        setFieldValue,
        values,
        errors,
        submitCount,
      }) => (
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.title}>{i18n.t('components.paymentCardForm.title', { price: 54 })}</Text>
            <Input
              mask="XXXX XXXX XXXX XXXX"
              maxLength={19}
              variant="simple"
              placeholder={i18n.t('components.paymentCardForm.fields.card')}
              type="number"
              label={i18n.t('components.paymentCardForm.fields.card')}
              style={styles.input}
              rightIcon={() => checkCard(values.card)}
              value={values.card}
              onChange={handleChange('card')}
              error={submitCount > 0 ? errors.card : undefined}
              customTextInputComponent={BottomSheetTextInput}
            />
            <View style={styles.cardContainer}>
              <Input
                style={[styles.input, styles.cardLeftInput]}
                variant="simple"
                mask="XX/XX"
                maxLength={5}
                label={i18n.t('components.paymentCardForm.fields.date')}
                type="number"
                placeholder={i18n.t('components.paymentCardForm.fields.datePlaceholder')}
                value={values.expDate}
                onChange={handleChange('expDate')}
                error={submitCount > 0 ? errors.expDate : undefined}
                customTextInputComponent={BottomSheetTextInput}
              />
              <Input
                style={[styles.input, styles.cardRightInput]}
                variant="simple"
                maxLength={3}
                label={i18n.t('components.paymentCardForm.fields.cvc')}
                type="number"
                placeholder={i18n.t('components.paymentCardForm.fields.cvcPlaceholder')}
                rightIcon={() => <Image source={cvc} />}
                value={values.cvc}
                onChange={handleChange('cvc')}
                error={submitCount > 0 ? errors.cvc : undefined}
                customTextInputComponent={BottomSheetTextInput}
              />
            </View>
            <Checkbox
              text={i18n.t('components.paymentCardForm.fields.save')}
              value
              onPress={(val) => setFieldValue('save', val)}
            />
          </View>
          <Button style={styles.button} onPress={handleSubmit}>{i18n.t('components.paymentCardForm.button')}</Button>
        </View>
      )}
    </Formik>
  );
};

export default PaymentCardForm;
