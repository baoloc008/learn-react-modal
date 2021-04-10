import React from "react";
import BottomModal from "./bottom-modal";
import LongContent from "./LongContent";

function AppModal({ isOpen, onCloseModal }) {
  return (
    <BottomModal isOpen={isOpen} closeModal={onCloseModal}>
      <p>This is modal</p>
      <button onClick={onCloseModal}>CloseModal</button>
      <LongContent />
    </BottomModal>
  );
}

export default AppModal;
