import { useModal } from "../../hooks/useModal";
import AddModal from "../modals/AddModal/AddModal";

import style from "./Test2.module.scss";

export default function Test2() {
  const { setModal } = useModal();

  return (
    <div className={style["test2"]}>
      <button onClick={() => setModal(<AddModal />)}>Add board</button>
    </div>
  );
}
