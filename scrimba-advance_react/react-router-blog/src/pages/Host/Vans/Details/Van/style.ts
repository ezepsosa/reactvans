import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerVan = styled.div`
  margin: 1rem;
  border-radius: 1rem;
  align-items: self-start;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const TextVanElement = styled.p`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "slnt" 0;
  margin: 1rem 0;
  color: #161616;
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 1rem;
  margin-bottom: 0rem;
`;

export const LinkedStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  color: ;
`;

export const VanHead = styled.div`
  display: flex;
`;

export const VanBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.7rem;
`;

export const Img = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  border-radius: 0.5rem;
  margin: 0.7rem;
`;
export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.2rem;
`;
