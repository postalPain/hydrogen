import React, { useState, forwardRef } from 'react';
import useStyles from './styles';
import { Pressable, View } from 'react-native';
import BottomSheet, { useBottomSheet } from '@gorhom/bottom-sheet';
import { Close } from 'components/Icons';

interface IModalOverlayProps {
  modalRef?: React.Ref<any>
  height: string;
}

const CloseModal = () => {
  const styles = useStyles();
  const { close } = useBottomSheet();
  return (
    <View style={styles.closeContainer}>
      <Pressable onPress={() => close()}><Close /></Pressable>
    </View>
  );
};

const ModalOverlay: React.FC<IModalOverlayProps> = ({
  children,
  modalRef,
  height,
}) => {
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <View style={styles.overlay} />
      )}
      <BottomSheet
        ref={modalRef}
        index={-1}
        snapPoints={[height]}
        enablePanDownToClose
        handleComponent={() => null}
        onAnimate={() => setOpen(!open)}
      >
        <View style={styles.container}>
          <CloseModal />
          <View style={styles.contentWrapper}>
            {children}
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

export default forwardRef<BottomSheet, React.PropsWithChildren<IModalOverlayProps>>((
  props,
  ref,
) => (<ModalOverlay {...props} modalRef={ref} />));
