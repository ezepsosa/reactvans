import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import { Container } from "../styles/style";
import Footer from "../pages/Footer";

export function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer textFooter="Ⓒ 2024 #VANLIFE" />
    </Container>
  );
}
