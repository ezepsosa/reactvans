import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const StyledContainer = css`
  display: flex;
  align-items: center;
`;

export const FilterContainer = styled.div`
  ${StyledContainer}
  justify-content: left;
  gap: 1rem;
  }
`;

export const Container = styled.div`
  ${StyledContainer}
  justify-content: space-between;
  margin-left: 2rem;
  @media (max-width: 992px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
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
