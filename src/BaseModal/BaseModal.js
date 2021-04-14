import React, { useEffect, useRef, useState } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import styles from "./styles.module.css";
import PortalModal from "./PortalModal";
import classNames from "classnames";

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
  const [isRender, setRender] = useState(isOpen);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(modalRef);
      setRender(true);
    } else {
      enableBodyScroll(modalRef);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  }, [isOpen]);

  function handleAnimationEnd() {
    if (!isOpen) {
      setRender(false);
    }
  }

  const modalStyle = classNames(modalContentClassName, {
    [modalContentAfterOpenClassName]: isOpen,
    [modalContentBeforeCloseClassName]: !isOpen,
  });

  const backdropStyle = classNames(modalOverlayClassName, {
    [modalOverlayAfterOpenClassName]: isOpen,
    [modalOverlayBeforeCloseClassName]: !isOpen,
  });

  return (
    <PortalModal isShowing={isRender}>
      <div className={styles.modalWrapper} ref={modalRef} {...otherProps}>
        <div onClick={closeModal} className={backdropStyle} />
        <div onAnimationEnd={handleAnimationEnd} className={modalStyle}>
          {children}
        </div>
      </div>
    </PortalModal>
  );
}

export default Modal;
