import React from 'react';
import useStyles from './styles';
import {
  Image, Linking, TouchableOpacity, View,
} from 'react-native';
import { Text } from '@stryberventures/stryber-react-native-ui-components';
import { formatPhoneNumber } from 'utilities/helpers';
import { SUPPORT_PHONE_NUMBER } from '../../constants';

const WhatsAppLink: React.FC = () => {
  const styles = useStyles();

  const openSMS = () => Linking.openURL(`sms:${SUPPORT_PHONE_NUMBER}`);

  const handleWhatsAppPress = () => Linking.openURL(`whatsapp://send?phone=${SUPPORT_PHONE_NUMBER}`)
    .catch(openSMS);

  return (
    <TouchableOpacity style={styles.container} onPress={handleWhatsAppPress}>
      <View style={styles.whatsappBlock}>
        <Image style={styles.whatsappLogo} source={require('../../../assets/images/whatsapp.png')} />
        <Text style={styles.phone}>{formatPhoneNumber(SUPPORT_PHONE_NUMBER, '#### ## ### ####')}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default WhatsAppLink;
