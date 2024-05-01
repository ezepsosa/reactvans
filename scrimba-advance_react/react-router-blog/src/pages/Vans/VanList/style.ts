import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff7ed;
  height: 100%;
  width: 100%;
  @media (max-width: 992px) {
    text-align: center;
  }
`;

export const VansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(250px, 100%), 1fr));
  grid-auto-rows: auto;
  gap: 2.5rem;
  padding: 1rem;
`;
