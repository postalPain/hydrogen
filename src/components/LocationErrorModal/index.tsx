import React from 'react';
import useStyles from './styles';
import { Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import Modal from 'components/Modal';
import { ProjectThemeType } from 'theme';
import i18n from 'i18n';
import { View, TouchableOpacity, Linking } from 'react-native';

interface IDeclinedPaymentModalProps {
  visible: boolean;
  onClose: () => void;
  theme?: ProjectThemeType;
}

const LocationErrorModal: React.FC<IDeclinedPaymentModalProps> = ({
  visible,
  onClose,
  theme,
}) => {
  const styles = useStyles(theme);
  return (
    <Modal style={styles.modal} visible={visible}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{i18n.t('modals.locationError.title')}</Text>
        <Text style={styles.description}>{i18n.t('modals.locationError.description')}</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={onClose}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.buttonText}>{i18n.t('modals.locationError.cancelButton')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openSettings()}
          style={[styles.button, styles.settingsButton]}
        >
          <Text style={[styles.buttonText, styles.settingsButtonText]}>{i18n.t('modals.locationError.settingsButton')}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default withTheme(LocationErrorModal);
