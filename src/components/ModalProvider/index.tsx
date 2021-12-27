import React, { useState } from 'react';

export enum ModalType {
  default = 'default',
  settings = 'settings'
}

export interface IDefaultModalData {
  layout: ModalType.default;
  title: string;
  description: string;
  buttonText?: string;
  onButtonPress?: () => void;
}

export interface ISettingsModalData {
  layout: ModalType.settings;
  title: string;
  description: string;
  denyButtonText: string;
  onDenyButtonPress: () => void;
  approveButtonText: string;
  onApproveButtonPress: () => void;
}

type ModalDataType = IDefaultModalData | ISettingsModalData;

type ModalContextType = {
  modalData: ModalDataType;
  setModalData: React.Dispatch<React.SetStateAction<ModalDataType>>;
  closeModal: () => void;
};

export const ModalContext = React.createContext<ModalContextType>(null);

const ModalProvider: React.FC = ({ children }) => {
  const [modalData, setModalData] = useState(null);

  const closeModal = () => setModalData(null);

  return (
    <ModalContext.Provider value={{ modalData, setModalData, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
