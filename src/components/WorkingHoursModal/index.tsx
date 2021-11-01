import React from 'react';
import useStyles from './styles';
import { Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import Modal from 'components/Modal';
import { ProjectThemeType } from 'theme';
import i18n from 'i18n';
import { Pressable } from 'react-native';
import { Close } from 'components/Icons';

interface IWorkingHoursModalProps {
  visible: boolean;
  onClose: () => void;
  theme?: ProjectThemeType;
}

const WorkingHoursModal: React.FC<IWorkingHoursModalProps> = ({
  visible,
  onClose,
  theme,
}) => {
  const styles = useStyles(theme);
  return (
    <Modal visible={visible}>
      <Pressable style={styles.button} onPress={onClose}><Close /></Pressable>
      <Text style={styles.title}>{i18n.t('modals.workingHoursModal.title')}</Text>
      <Text style={styles.description}>{i18n.t('modals.workingHoursModal.description')}</Text>
    </Modal>
  );
};

export default withTheme(WorkingHoursModal);
