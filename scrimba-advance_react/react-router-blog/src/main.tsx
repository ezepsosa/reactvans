import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import "./styles/style.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/vans" element={<Vans></Vans>}></Route>
    </Routes>
    <Footer textFooter="Ⓒ 2024 #VANLIFE" />
  </BrowserRouter>
);
