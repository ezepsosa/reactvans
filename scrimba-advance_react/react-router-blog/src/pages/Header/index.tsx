import { Navbar } from "./Navbar/index";
import { NavbarLinkTypeProps } from "./Navbar/types";
export default function Header() {
  const navbarLinks: NavbarLinkTypeProps[] = [
    { to: "/about", text: "About" },
    { to: "/vans", text: "Vans" },
  ];

  return (
    <header>
      <Navbar
        tologo="/"
        textlogo="#VANSLIFE"
        navbarlinks={navbarLinks}
      ></Navbar>
    </header>
  );
}
