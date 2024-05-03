import { StyledButton, StyledLink } from "./styles";
import { Props } from "./types";

export const Button = ({ text, to, ...commonProps }: Props): JSX.Element =>
  to ? (
    <StyledLink to={to} {...commonProps}>
      {text}
    </StyledLink>
  ) : (
    <StyledButton {...commonProps}>{text}</StyledButton>
  );
