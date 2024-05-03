import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import VansList from "../pages/Vans/VanList";
import VansDetail from "../pages/Vans/VanDetails";
import { Layout } from "./layout";
import { Dashboard } from "../pages/Host/Dashboard";
import { Income } from "../pages/Host/Income";
import { Reviews } from "../pages/Host/Reviews";

export function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<VansList />} />
          <Route path="/vans/:id" element={<VansDetail />} />
          <Route path="/host" element={<Dashboard />}>
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
