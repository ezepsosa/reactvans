import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff7ed;
  height: 100%;
  width: 100%;
  display: flex;
  @media (max-width: 992px) {
    display: block;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  max-height: 50rem;
`;

export const ImgContainer = styled.div`
  margin: 1rem;
  width: 90%;
  height: 50%;
`;

export const DescriptionContainer = styled.div`
  margin: 1rem;
  width: 90%;
  height: 50%;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;
