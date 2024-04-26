import { Props } from "./types";
import { NavbarContainer, NavbarLinkLogo, NavbarLink } from "./styles";

export const Navbar = ({
  tologo,
  textlogo,
  navbarlinks,
}: Props): JSX.Element => (
  <NavbarContainer>
    <NavbarLinkLogo to={tologo}>{textlogo}</NavbarLinkLogo>
    <div>
      {navbarlinks
        ? navbarlinks.map((link) => (
            <NavbarLink to={link.to}>{link.text}</NavbarLink>
          ))
        : null}
    </div>
  </NavbarContainer>
);
