import React, { useEffect, useRef } from "react";
import ReactModal from "react-modal";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import styles from "./styles.module.css";

ReactModal.setAppElement("#root");

function Modal({
  isOpen = false,
  closeModal,
  children,
  modalContentClassName = styles.modalContent,
  modalContentAfterOpenClassName = "",
  modalContentBeforeCloseClassName = "",
  modalOverlayClassName = styles.modalOverlay,
  modalOverlayAfterOpenClassName = "",
  modalOverlayBeforeCloseClassName = "",
  ...otherProps
}) {
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
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      ref={modalRef}
      className={{
        base: modalContentClassName,
        afterOpen: modalContentAfterOpenClassName,
        beforeClose: modalContentBeforeCloseClassName,
      }}
      overlayClassName={{
        base: modalOverlayClassName,
        afterOpen: modalOverlayAfterOpenClassName,
        beforeClose: modalOverlayBeforeCloseClassName,
      }}
      {...otherProps}
    >
      {children}
    </ReactModal>
  );
}

export default Modal;
