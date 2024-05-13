import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export function HostLayout() {
  return (
    <div>
      <Navbar buttons={["Dashboard", "Income", "Vans", "Reviews"]}></Navbar>
      <Outlet />
    </div>
  );
}
