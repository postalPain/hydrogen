import React, { useContext } from 'react';
import useStyles from './styles';
import { Modal, TouchableOpacity, View } from 'react-native';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import { Close } from 'components/Icons';
import {
  IDefaultModalData,
  ISettingsModalData,
  ModalContext,
  ModalType,
} from 'components/ModalProvider';

interface IModalHandlerProps {
  theme?: ProjectThemeType;
}

const ModalHandler: React.FC<IModalHandlerProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { modalData, closeModal } = useContext(ModalContext);

  const renderDefaultModal = (data: IDefaultModalData) => (
    <>
      <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
        <Close />
      </TouchableOpacity>
      <View style={styles.modalContent}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        {(data.buttonText && data.onButtonPress) && (
        <Button
          style={styles.button}
          onPress={data.onButtonPress}
        >
          {data.buttonText}
        </Button>
        )}
      </View>
    </>
  );

  const renderSettingsModal = (data: ISettingsModalData) => (
    <>
      <View style={styles.settingsModalContent}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          onPress={data.onDenyButtonPress}
          style={[styles.settingsButton, styles.denyButton]}
        >
          <Text style={styles.buttonText}>{data.denyButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={data.onApproveButtonPress}
          style={[styles.settingsButton, styles.approveButton]}
        >
          <Text
            style={[styles.buttonText, styles.settingsButtonText]}
          >
            {data.approveButtonText}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );


  return (
    <Modal
      animationType="fade"
      transparent
      visible={!!modalData}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalContainer}>
          {modalData?.layout === ModalType.default && renderDefaultModal(modalData)}
          {modalData?.layout === ModalType.settings && renderSettingsModal(modalData)}
        </View>
      </View>
    </Modal>
  );
};

export default withTheme(ModalHandler);
