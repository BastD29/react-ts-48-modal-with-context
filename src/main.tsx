import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./style/index.scss";
import { ModalProvider } from "./context/ModalContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
