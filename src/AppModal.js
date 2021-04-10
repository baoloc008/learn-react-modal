import React from "react";
import BaseModal from "./base-modal";

function AppModal({ isOpen, onCloseModal }) {
  return (
    <BaseModal isOpen={isOpen} closeModal={onCloseModal}>
      <p>This is modal</p>
      <button onClick={onCloseModal}>CloseModal</button>
    </BaseModal>
  );
}

export default AppModal;
