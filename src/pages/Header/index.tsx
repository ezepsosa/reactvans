import { useState, useEffect } from "react";
import { Navbar } from "./Navbar/index";
import { NavbarLinkTypeProps } from "./Navbar/types";
import { StyledContainer } from "./style";

export default function Header() {
  const [session, setSession] = useState(
    localStorage.getItem("usertokenlogged")
  );
  const [navbarLinks, setNavbarLinks] = useState<NavbarLinkTypeProps[]>([
    { to: "/host", text: "Host" },
    { to: "/about", text: "About" },
    { to: "/vans", text: "Vans" },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedSession = localStorage.getItem("usertokenlogged");
      setSession(updatedSession);
    }, 200);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const updatedNavbarLinks = [
      { to: "/host", text: "Host" },
      { to: "/about", text: "About" },
      { to: "/vans", text: "Vans" },
    ];

    if (session == null || session === "") {
      updatedNavbarLinks.push({ to: "/login", text: "Login" });
    } else {
      updatedNavbarLinks.push({ to: "/logout", text: "Logout" });
    }

    setNavbarLinks(updatedNavbarLinks);
  }, [session]);

  return (
    <StyledContainer>
      <Navbar tologo="/" textlogo="#VANSLIFE" navbarlinks={navbarLinks} />
    </StyledContainer>
  );
}
