import React from 'react';
import useStyles from './styles';
import { View, SafeAreaView } from 'react-native';
import {
  Text,
  Input,
  Button,
  withTheme,
} from '@stryberventures/stryber-react-native-ui-components';
import { Formik } from 'formik';
import i18n from 'i18n';
import { SignUpSchema } from 'utilities/validationSchemas';
import { ProjectThemeType } from 'theme';

interface ISignUpProps {
  theme: ProjectThemeType
}

const SignUp: React.FC<ISignUpProps> = ({ theme }) => {
  const classes = useStyles();
  return (
    <SafeAreaView style={theme.components.safeArea}>
      <View style={classes.container}>
        <Text h1>{i18n.t('screens.signUp.title')}</Text>
        <Formik
          initialValues={{
            name: '', phone: '', email: '', password: '',
          }}
          onSubmit={values => console.log(values)}
          validationSchema={SignUpSchema}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            submitCount,
          }) => (
            <View>
              <Input
                variant="simple"
                label={i18n.t('screens.signUp.fields.name')}
                value={values.name}
                onChange={handleChange('name')}
                error={submitCount > 0 ? errors.name : undefined}
              />
              <Input
                variant="simple"
                label={i18n.t('screens.signUp.fields.phone')}
                value={values.phone}
                onChange={handleChange('phone')}
                error={submitCount > 0 ? errors.phone : undefined}
                type="phone"
              />
              <Input
                variant="simple"
                label={i18n.t('screens.signUp.fields.email')}
                value={values.email}
                onChange={handleChange('email')}
                error={submitCount > 0 ? errors.email : undefined}
                type="email"
              />
              <Input
                variant="simple"
                label={i18n.t('screens.signUp.fields.password')}
                value={values.password}
                secure
                onChange={handleChange('password')}
                error={submitCount > 0 ? errors.password : undefined}
              />
              <Button onPress={handleSubmit}>{i18n.t('screens.signUp.button')}</Button>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

export default withTheme(SignUp);
