import { FC } from "react";

import style from "./Sidebar.module.scss";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar: FC<SidebarProps> = ({ isOpen, toggle }) => {
  //   const classname = `sidebar ${isOpen ? "open" : ""}`;
  const classname = `${style["sidebar"]} ${
    isOpen ? style["sidebar--open"] : ""
  }`;

  return (
    <div className={classname}>
      <button onClick={toggle}>Close</button>
    </div>
  );
};

export default Sidebar;
