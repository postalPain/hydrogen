import React from 'react';
import useStyles from './styles';
import { Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import Modal from 'components/Modal';
import { ProjectThemeType } from 'theme';
import i18n from 'i18n';
import {
  View, TouchableOpacity, Linking, Platform,
} from 'react-native';

interface IUpdateAppModalProps {
  visible: boolean;
  onClose: () => void;
  updateURL: string | null;
  theme?: ProjectThemeType;
}

const UpdateAppModal: React.FC<IUpdateAppModalProps> = ({
  visible,
  onClose,
  updateURL,
  theme,
}) => {
  const styles = useStyles(theme);

  const storeName = Platform.OS === 'ios'
    ? i18n.t('modals.updateApp.appStore')
    : i18n.t('modals.updateApp.googlePlay');
  return (
    <Modal style={styles.modal} visible={visible}>
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{i18n.t('modals.updateApp.title')}</Text>
        <Text style={styles.description}>{i18n.t('modals.updateApp.description')}</Text>
        <Text style={styles.description}>{i18n.t('modals.updateApp.description2', { store: storeName })}</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={onClose}
          style={[styles.button, styles.cancelButton]}
        >
          <Text style={styles.buttonText}>{i18n.t('modals.updateApp.cancelButton')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(updateURL)}
          style={[styles.button, styles.settingsButton]}
        >
          <Text style={[styles.buttonText, styles.settingsButtonText]}>{i18n.t('modals.updateApp.updateButton')}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default withTheme(UpdateAppModal);
