import React from "react";
import BaseModal from "../BaseModal";
import styles from "./styles.module.css";

function BottomModal(props) {
  return (
    <BaseModal
      modalContentClassName={styles.modalContent}
      modalContentAfterOpenClassName={styles.modalContentAfterOpen}
      modalContentBeforeCloseClassName={styles.modalContentBeforeClose}
      modalOverlayClassName={styles.modalOverlay}
      modalOverlayAfterOpenClassName={styles.modalOverlayAfterOpen}
      modalOverlayBeforeCloseClassName={styles.modalOverlayBeforeClose}
      {...props}
    />
  );
}

export default BottomModal;
