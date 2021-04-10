import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

ReactModal.setAppElement("#root");

function Modal({ isOpen, closeModal, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(modalRef.current);
    } else {
      enableBodyScroll(modalRef.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  return (
    <ReactModal isOpen={isOpen} onRequestClose={closeModal} ref={modalRef}>
      {children}
    </ReactModal>
  );
}

export default Modal;
