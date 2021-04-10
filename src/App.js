import React from "react";
import { useModal } from "./base-modal";
import AppModal from "./AppModal";
import LongContent from "./LongContent";

function App() {
  const [isOpen, openModal, closeModal] = useModal();

  function handleOpenModal() {
    openModal();
  }

  return (
    <div className="App">
      <h1>App</h1>
      <button onClick={handleOpenModal}>OpenModal</button>
      <LongContent />
      <AppModal isOpen={isOpen} onCloseModal={closeModal} />
    </div>
  );
}

export default App;
