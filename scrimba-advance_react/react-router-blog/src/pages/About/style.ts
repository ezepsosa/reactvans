import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

export const AboutContainer = styled.div`
  padding: 1rem;
  background-color: #fff7ed;
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 0.625rem;
  justify-items: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  width: 85%;
  text-align: center;
`;

export const CardContainer = styled.div`
  background-color: #ffcc8d;
  border-radius: 1rem;
  padding: 0.5rem;
  height: 10.5rem;
  padding: 1.25rem;
  width: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
