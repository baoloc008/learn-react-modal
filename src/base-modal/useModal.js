import { useState } from "react";

function useModal(props) {
  const [isOpen, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }
  return [isOpen, openModal, closeModal];
}

export default useModal;
