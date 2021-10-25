import React from 'react';
import useStyles from './styles';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import Modal from 'components/Modal';
import { ProjectThemeType } from 'theme';
import i18n from 'i18n';

interface IDeclinedPaymentModalProps {
  visible: boolean;
  onClose: () => void;
  theme?: ProjectThemeType;
}

const DeclinedPaymentModal: React.FC<IDeclinedPaymentModalProps> = ({
  visible,
  onClose,
  theme,
}) => {
  const styles = useStyles(theme);
  return (
    <Modal visible={visible}>
      <Text style={styles.title}>{i18n.t('modals.declinedPaymentModal.title')}</Text>
      <Text style={styles.description}>{i18n.t('modals.declinedPaymentModal.description')}</Text>
      <Button style={styles.button} onPress={onClose}>{i18n.t('modals.declinedPaymentModal.button')}</Button>
    </Modal>
  );
};

export default withTheme(DeclinedPaymentModal);
