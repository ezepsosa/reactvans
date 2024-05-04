import styled from "styled-components";

export const Container = styled.div`
  place-items: center;
`;

export const VanElementContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
