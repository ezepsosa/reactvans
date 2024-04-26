import styled, { css } from "styled-components";
import { TextProps } from "./types";

export const styledText = css`
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-variation-settings: "slnt" 0;
`;

export const Headline = styled.h1<TextProps>`
  ${styledText}
  color: ${({ color }) => color || "#393e3dff"};
  font-weight: ${({ fontWeight }) => fontWeight || 800};
  font-size: ${({ fontSize }) => fontSize || "2rem"};
`;

export const Text = styled.p<TextProps>`
  ${styledText}
  color: ${({ color }) => color || "#393e3dff"};
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  font-size: ${({ fontSize }) => fontSize || "1rem"};
  background-color: ${({ backgroundColor }) => backgroundColor || "#bcac9810"};
  border-radius: ${({ borderRadius }) => borderRadius || "0.25rem"};
`;

export const Span = styled.span<TextProps>`
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  font-size: ${({ fontSize }) => fontSize || "0.7rem"};
  color: ${({ color }) => color || "#aaaaaa"};
`;
