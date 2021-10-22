import React from 'react';
import useStyles from './styles';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import Modal from 'components/Modal';
import { ProjectThemeType } from 'theme';

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
      <Text style={styles.title}>Oh snap!</Text>
      <Text style={styles.description}>
        This payment was declined. Your card has not been charged.
        Please try again or try another card.
        If the error proceeds then please contact your card issuer.
      </Text>
      <Button style={styles.button} onPress={onClose}>Okay</Button>
    </Modal>
  );
};

export default withTheme(DeclinedPaymentModal);
