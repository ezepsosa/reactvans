import { Link } from "react-router-dom";
import styled from "styled-components";

export const Img = styled.img`
  width: 5.2rem;
  height: 5.2rem;
  object-fit: cover;
  border-radius: 0.7rem;
  margin: 0.7rem;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
`;

export const Container = styled.div`
  display: flex;
  background-color: white;
  align-items: self-start;
  margin: 1rem;
  border-radius: 1rem;
  width: 95%;
  height: 7rem;
`;

export const TextVanElement = styled.p`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "slnt" 0;
  margin: 1rem 0;
  color: "#393e3dff";
  font-weight: 700;
  font-size: "1.2rem";
  margin-top: 1rem;
  margin-bottom: 0rem;
`;

export const LinkedStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  color: ;
`;
