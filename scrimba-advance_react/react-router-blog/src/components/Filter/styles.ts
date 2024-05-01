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
