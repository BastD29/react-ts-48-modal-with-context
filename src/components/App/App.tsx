import { useState } from "react";

import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Header from "../Header/Header";

import style from "./App.module.scss";

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={style["app"]}>
      <Header />
      <Sidebar isOpen={isSidebarOpen} toggle={toggleSidebar} />
      <Content isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default App;
