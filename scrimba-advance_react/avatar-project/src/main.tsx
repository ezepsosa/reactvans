import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Avatar } from "./components/Avatar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Avatar src={"src/assets/valeriña_cariña.jpg"} />
    <br />
    <Avatar src={""}>Hola</Avatar>
    <br />
    <Avatar src={""} />
  </React.StrictMode>
);
