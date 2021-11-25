import React from 'react';
import useStyles from './styles';
import {
  View, Modal as RNModal, ViewStyle,
} from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';

interface IModalProps {
  visible: boolean;
  theme?: ProjectThemeType;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Modal: React.FC<IModalProps> = ({
  visible = false,
  children,
  theme,
  style,
}) => {
  const styles = useStyles(theme);
  return (
    <RNModal
      animationType="fade"
      transparent
      visible={visible}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalContainer, style]}>
          {children}
        </View>
      </View>
    </RNModal>
  );
};

export default withTheme(Modal);
