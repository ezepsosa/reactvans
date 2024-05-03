import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { MockServer } from "./server/intex";
import { RoutesComponent } from "./components/routes";

const environment = process.env.NODE_ENV;

MockServer({ environment });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RoutesComponent />
);
