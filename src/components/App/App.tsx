import { FC, useState } from "react";

import Modal from "../Modal/Modal";

import style from "./App.module.scss";

const App: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={style["app"]}>
      <div
        className={style["button-wrapper"]}
        onClick={() => console.log("clicked")}
      >
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div className={style["other-content"]}>Other Content</div>
    </div>
  );
};

export default App;
