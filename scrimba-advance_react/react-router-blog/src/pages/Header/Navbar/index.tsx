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
        <NavbarLinkLogo to={tologo}>{textlogo}</NavbarLinkLogo>
      </ElementContainer>
      <GroupContainer>
        {navbarlinks
          ? navbarlinks.map((link) => (
              <ElementContainer>
                <NavbarLink key={link.to} to={link.to}>
                  {link.text}
                </NavbarLink>
              </ElementContainer>
            ))
          : null}
      </GroupContainer>
    </GroupContainer>
  </NavbarContainer>
);
