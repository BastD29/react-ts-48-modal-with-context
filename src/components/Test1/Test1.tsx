import { useModal } from "../../hooks/useModal";
import DeleteModal from "../modals/DeleteModal/DeleteModal";

import style from "./Test1.module.scss";

export default function Test1() {
  const { setModal } = useModal();

  return (
    <div className={style["test1"]}>
      <button onClick={() => setModal(<DeleteModal />)}>Delete board</button>
    </div>
  );
}
