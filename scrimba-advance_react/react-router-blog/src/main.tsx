import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import { MockServer } from "./server/intex";
import { Container } from "./styles/style";
import { RoutesComponent } from "./routes";

const environment = process.env.NODE_ENV;

if (environment !== "production") {
  MockServer({ environment });
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Container>
    <BrowserRouter>
      <Header />
      <RoutesComponent />
      <Footer textFooter="Ⓒ 2024 #VANLIFE" />
    </BrowserRouter>
  </Container>
);
