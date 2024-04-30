import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff7ed;
  padding: 1rem;
`;

export const VansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  gap: 20px;
  margin-bottom: 10rem;
`;
