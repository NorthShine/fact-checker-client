import { Modal } from 'components/common/Modal';
import React from 'react';

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => (
  <>
    {children}
    <Modal />
  </>
);
