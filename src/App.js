import React, { useState } from 'react';
import Modal from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <h2>Modal heading </h2>
          <p>content.............................|
            ......................................
          </p>
        </Modal>
      )}
    </div>
  );
};

export default App;