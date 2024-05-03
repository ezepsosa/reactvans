import { StyledButton, StyledLink, StyledNavLink } from "./styles";
import { Props } from "./types";

export const Button = ({
  text,
  to,
  typeElement,
  ...commonProps
}: Props): JSX.Element =>
  to! ? (
    <StyledButton {...commonProps}>{text}</StyledButton>
  ) : typeElement == "navLink" ? (
    <StyledNavLink to={to!} {...commonProps}>
      {text}
    </StyledNavLink>
  ) : (
    <StyledLink to={to!} {...commonProps}>
      {text}
    </StyledLink>
  );
