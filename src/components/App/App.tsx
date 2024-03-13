import Header from "../Header/Header";
import Test1 from "../Test1/Test1";
import Test2 from "../Test2/Test2";

import style from "./App.module.scss";

export default function App() {
  return (
    <div className={style["app"]}>
      <Header />
      <Test1 />
      <Test2 />
    </div>
  );
}
