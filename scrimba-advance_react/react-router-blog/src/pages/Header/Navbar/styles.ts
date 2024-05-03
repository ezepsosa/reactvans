import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLinkLogo = styled(Link)`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-weight: 900;
  font-style: normal;
  font-variation-settings: "slnt" 0;
  font-size: 2rem;
  text-decoration: none;
  color: #000000;
`;

export const NavbarLink = styled(Link)`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "slnt" 0;
  font-weight: 600;
  text-decoration: none;
  color: #4d4d4d;
  font-size: 1.25rem;
  margin-right: 1rem;
`;
