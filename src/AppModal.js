import React from "react";
import BaseModal from "./base-modal";
import LongContent from "./LongContent";

function AppModal({ isOpen, onCloseModal }) {
  return (
    <BaseModal isOpen={isOpen} closeModal={onCloseModal}>
      <p>This is modal</p>
      <button onClick={onCloseModal}>CloseModal</button>
      <LongContent />
    </BaseModal>
  );
}

export default AppModal;
