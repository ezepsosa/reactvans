import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import VansList from "../pages/Vans/VanList";
import VansDetail from "../pages/Vans/Details";
import { Layout } from "./layout";
import { HostLayout } from "../pages/Host/hostlayour";
import { Reviews } from "../pages/Host/Reviews";
import HostVansList from "../pages/Host/Vans/List";
import HostVansDetails from "../pages/Host/Vans/Details";
import { PricingTabHostVan } from "../pages/Host/Vans/Details/Van/PricingTab";
import { DetailsTabHostVan } from "../pages/Host/Vans/Details/Van/DetailsTab";
import { PhotosTabHostVan } from "../pages/Host/Vans/Details/Van/PhotosTab";
import { NotFoundPage } from "../pages/404";
import Login from "../pages/Login";
import { Logout } from "../pages/Logout";

export function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
          <Route path="vans">
            <Route index element={<VansList />} />
            <Route path=":id" element={<VansDetail />} />
          </Route>
          <Route path="host" element={<HostLayout />}>
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans">
              <Route index element={<HostVansList />} />
              <Route path=":id" element={<HostVansDetails />}>
                <Route path="" element={<DetailsTabHostVan />} />
                <Route path="pricing" element={<PricingTabHostVan />} />
                <Route path="photos" element={<PhotosTabHostVan />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
