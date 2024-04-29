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
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: none;
  transition: background-color 0.3s ease;
  text-decoration: ${({ textDecoration }) => textDecoration || "none"};
  color: ${({ color }) => color || "white"};
  background-color: ${({ backgroundcolor }) => backgroundcolor || "#ff8c38"};
  padding: ${({ padding }) => padding || "0.9rem 6rem"};
  &:hover {
    background-color: ${({ hoverbackgroundcolor }) =>
      hoverbackgroundcolor || "#d1702b"};
    color: ${({ hovercolor }) => hovercolor || "black"};
`;

export const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}

  }
`;

export const StyledLink = styled(Link)<ButtonProps>`
  ${buttonStyles}
`;
