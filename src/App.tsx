import { FC, useState } from "react";

import Modal from "./components/Modal/Modal";

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Modal Title</h2>
        <p>This is a modal window. You can do the following things with it:</p>
        <ul>
          <li>
            <strong>Read:</strong> Modal content goes here.
          </li>
          <li>
            <strong>Close:</strong> Click the button to close the modal.
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default App;
