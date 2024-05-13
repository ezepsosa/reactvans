import styled from "styled-components";

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 992px) {
    align-items: left;
  }
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
`;

export const Img = styled.img`
  width: 100%;
  height: 75%;
  object-fit: cover;
  border-radius: 1rem;
`;
