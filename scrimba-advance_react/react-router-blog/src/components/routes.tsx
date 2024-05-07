import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import VansList from "../pages/Vans/VanList";
import VansDetail from "../pages/Vans/Details";
import { Layout } from "./layout";
import { HostLayout } from "../pages/Host/hostlayour";
import { Income } from "../pages/Host/Income";
import { Reviews } from "../pages/Host/Reviews";
import { Dashboard } from "../pages/Host/Dashboard";
import HostVansList from "../pages/Host/Vans/List";
import HostVansDetails from "../pages/Host/Vans/Details";

export function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans">
            <Route index element={<VansList />} />
            <Route path=":id" element={<VansDetail />} />
          </Route>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans">
              <Route index element={<HostVansList />} />
              <Route path=":id" element={<HostVansDetails />}>
                <Route path="" element={<h1>details here</h1>} />
                <Route path="pricing" element={<h1>pricing here</h1>} />
                <Route path="photos" element={<h1>photos here</h1>} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
