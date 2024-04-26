import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const buttonStyles = css`
  font-family: "Inter", sans-serif;
  font-variation-settings: "slnt" 0;
  font-optical-sizing: auto;
  border-radius: 0.5rem;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-style: normal;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const StyledButton = styled.button`
  ${buttonStyles}
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: #ff8c38;
  color: white;
  border: none;
  padding: 0.9rem 6rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d1702b;
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`
  background-color: #000000;
  color: white;
  border: none;
  padding: 0.9rem 2rem;
  transition: background-color 0.3s ease;
`;

const linkStyles = css`
  ${buttonStyles}
`;

export const StyledLink = styled(Link)`
  ${linkStyles}
`;

export const StyledPrimaryLink = styled(StyledLink)`
  background-color: #ff8c38;
  color: white;
  border: none;
  padding: 0.9rem 6rem;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #d1702b;
  }
`;

export const StyledSecondaryLink = styled(StyledLink)`
  background-color: #000000;
  color: white;
  border: none;
  padding: 0.9rem 2rem;
  transition: background-color 0.3s ease;
`;
