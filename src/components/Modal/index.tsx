import React from 'react';
import useStyles from './styles';
import {
  View, Modal as RNModal,
} from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';

interface IModalProps {
  visible: boolean;
  theme?: ProjectThemeType;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ visible = false, children, theme }) => {
  const styles = useStyles(theme);
  return (
    <RNModal
      animationType="fade"
      transparent
      visible={visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          {children}
        </View>
      </View>
    </RNModal>
  );
};

export default withTheme(Modal);
