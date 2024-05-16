import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  margin: 0.7rem;
`;

export const GroupContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const ElementContainer = styled.li``;

export const NavbarLinkLogo = styled(Link)`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-variation-settings: "slnt" 0;
  font-size: 2rem;
  text-decoration: none;
  color: #000000;
  @media (max-width: 756px) {
    font-size: 1.5rem;
  }
`;

export const NavbarLink = styled(NavLink)`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "slnt" 0;
  font-weight: 600;
  text-decoration: none;
  color: #4d4d4d;
  font-size: 1.25rem;
  margin-right: 1.25rem;
  &:hover {
    color: black;
  }
  @media (max-width: 756px) {
    font-size: 1rem;
  }
`;
