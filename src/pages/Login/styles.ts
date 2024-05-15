import { FaInfo } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  text-align: center;
`;

export const Input = styled.input`
  height: 1.5rem;
  width: 100%;
  border: 1px solid #dbdbdb;
  border-radius: 0.35rem;
  padding: 0.5rem;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const ContainerText = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

export const Info = styled(FaInfo)`
  color: #bfbfbf;
  height: 0.8rem;
  margin-bottom: 1rem;
  width: 0.8rem;
  cursor: help;
  position: relative;
  &:hover {
    display: block;
  }
`;

export const InfoMessage = styled.div`
  position: absolute;
  top: -2rem; /* Ajusta la posición del cuadro de información */
  left: 0;
  background-color: #fff;
  border: 1px solid #bfbfbf;
  padding: 0.5rem;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 0.8rem;
  display: none; /* Inicialmente oculto */
`;

export const InfoContainer = styled.div`
  position: relative;
  &:hover ${InfoMessage} {
    display: block; /* Muestra el cuadro de información cuando pasas el ratón sobre Container */
  }
`;
