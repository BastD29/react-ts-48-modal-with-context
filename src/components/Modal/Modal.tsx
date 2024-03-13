import { FC, ReactNode } from "react";

import ReactDOM from "react-dom";

import style from "./Modal.module.scss";

type ModalProps = {
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
};

const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={style["overlay"]} />
      <div className={style["modal"]}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </>,
    document.getElementById("modal") as HTMLElement
  );
};

export default Modal;
