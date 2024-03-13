import {
  Context,
  FC,
  ReactNode,
  createContext,
  useCallback,
  useState,
} from "react";
import Modal from "../components/modals/Modal/Modal";

type ModalContextType = {
  unsetModal: () => void;
  setModal: (modal: ReactNode) => void;
};

export const ModalContext: Context<ModalContextType | undefined> =
  createContext<ModalContextType | undefined>(undefined);

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider: FC<ModalProviderProps> = (props) => {
  const [modal, setModal] = useState<ReactNode>(undefined);

  const unsetModal = useCallback(() => {
    setModal(undefined);
  }, []);

  return (
    <ModalContext.Provider value={{ unsetModal, setModal }} {...props}>
      {props.children}
      {modal && <Modal modal={modal} unsetModal={unsetModal} />}
    </ModalContext.Provider>
  );
};
