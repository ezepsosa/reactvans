import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { NavLinkProps } from "./types";

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

export const StyledNavLink = styled(NavLink)<NavLinkProps>`
  text-decoration: ${({ textdecoration }) => textdecoration || "none"};
`;
