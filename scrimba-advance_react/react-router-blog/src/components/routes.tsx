import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import VansList from "../pages/Vans/VanList";
import VansDetail from "../pages/Vans/VanDetails";
import { Layout } from "./layout";

export function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/vans" element={<VansList></VansList>}></Route>
          <Route path="/vans/:id" element={<VansDetail></VansDetail>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
