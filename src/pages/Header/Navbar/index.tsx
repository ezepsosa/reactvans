import { Props } from "./types";
import {
  NavbarContainer,
  NavbarLinkLogo,
  NavbarLink,
  GroupContainer,
  ElementContainer,
} from "./styles";

export const Navbar = ({
  tologo,
  textlogo,
  navbarlinks,
}: Props): JSX.Element => (
  <NavbarContainer>
    <GroupContainer>
      <ElementContainer>
        <NavbarLinkLogo key={textlogo.toLowerCase()} to={tologo}>
          {textlogo}
        </NavbarLinkLogo>
      </ElementContainer>
      <GroupContainer>
        {navbarlinks
          ? navbarlinks.map((link) => (
              <ElementContainer key={link.text.toLowerCase()}>
                <NavbarLink
                  style={({ isActive }) =>
                    isActive
                      ? { textDecoration: "underline", color: "black" }
                      : { textDecoration: "none" }
                  }
                  to={link.to}
                >
                  {link.text}
                </NavbarLink>
              </ElementContainer>
            ))
          : null}
      </GroupContainer>
    </GroupContainer>
  </NavbarContainer>
);
