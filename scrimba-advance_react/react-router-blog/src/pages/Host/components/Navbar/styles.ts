import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { NavbarContainerProps } from "./types";

const largescreenStyles = css`
  @media (max-width: 992px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const StyledContainer = css`
  display: flex;
  align-items: center;
`;

export const FilterContainer = styled.div`
  ${StyledContainer}
  justify-content: left;
  gap: 0.5rem;
  }
`;

export const Container = styled.div<NavbarContainerProps>`
  ${StyledContainer}
  justify-content: space-between;
  margin-left: 2rem;

  ${(props) => props.largescreen && largescreenStyles}
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "slnt" 0;
  font-weight: 600;
  text-decoration: none;
  font-size: 1.25rem;

  color: #4d4d4d;
  margin-right: 1rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
