import { Navbar } from "./Navbar/index";
import { NavbarLinkTypeProps } from "./Navbar/types";
import { StyledContainer } from "./style";
export default function Header() {
  const navbarLinks: NavbarLinkTypeProps[] = [
    { to: "/host", text: "Host" },
    { to: "/about", text: "About" },
    { to: "/vans", text: "Vans" },
  ];

  return (
    <StyledContainer>
      <Navbar
        tologo="/"
        textlogo="#VANSLIFE"
        navbarlinks={navbarLinks}
      ></Navbar>
    </StyledContainer>
  );
}
