import styled, { css } from "styled-components";
import { ButtonProps } from "./types";
import { Link } from "react-router-dom";

const buttonStyles = css<ButtonProps>`
  font-family: "Inter", sans-serif;
  font-variation-settings: "slnt" 0;
  font-optical-sizing: auto;
  border-radius: 0.5rem;
  display: inline-block;
  text-align: center;
  font-style: normal;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: ${({ marginbottom }) => marginbottom || "1rem"};
  margin-bottom: ${({ margintop }) => margintop || "1rem"};
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};
  color: ${({ color }) => color || "white"};
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#ff8c38"};
  height: ${({ height }) => height || "3rem"};
  line-height: ${({ height }) => height || "3rem"};
  width: ${({ width }) => width || "16rem"};
  font-size: ${({ fontSize }) => fontSize || "0.85rem"};
  font-weight: ${({ fontweight }) => fontweight || "700"};
  @media (max-width: 768px) {
    height: ${({ mediaheight }) => mediaheight || "1rem"};
    width: ${({ mediawidth }) => mediawidth || "8rem"};
    line-height: ${({ mediaheight }) => mediaheight || "1rem"};
    font-size: ${({ mediafontSize }) => mediafontSize || "0.85rem"};
    font-weight: ${({ mediafontweight }) => mediafontweight || "700"};
  }
  &:hover {
    background-color: ${({ hoverbackgroundcolor }) =>
      hoverbackgroundcolor || "#d1702b"};
    color: ${({ hovercolor }) => hovercolor || "white"};

`;

export const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
  cursor: pointer;

  }
`;

export const StyledLink = styled(Link)<ButtonProps>`
  ${buttonStyles}
`;
