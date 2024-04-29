import styled, { css } from "styled-components";

export const StyledContainer = css`
  display: flex;
  align-items: center;
`;

export const FilterContainer = styled.div`
  ${StyledContainer}
  justify-content: left;
  gap: 1rem;
`;

export const Container = styled.div`
  ${StyledContainer}
  justify-content: space-between;
  margin: 0 2rem;
`;
