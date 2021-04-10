import React from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function Modal({ isOpen, closeModal, children }) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal}>
      {children}
    </ReactModal>
  );
}

export default Modal;
