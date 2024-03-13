import { FC, ReactNode } from "react";

import style from "./Modal.module.scss";

type ModalProps = {
  modal: ReactNode;
  unsetModal: () => void;
};

const Modal: FC<ModalProps> = ({ modal, unsetModal }) => {
  return (
    <>
      <div className={style["overlay"]} />
      <div className={style["modal"]}>
        <div className={style["modal__inner"]}>
          <button className={style["modal__close-btn"]} onClick={unsetModal}>
            x
          </button>
          {modal}
        </div>
      </div>
    </>
  );
};

export default Modal;
