import { StyledButton, StyledLink } from "./styles";
import { Props } from "./types";

export const Button = ({
  text,
  to,
  onClick,
  ...commonProps
}: Props): JSX.Element =>
  to ? (
    <StyledLink to={to} {...commonProps}>
      {text}
    </StyledLink>
  ) : (
    <StyledButton onClick={onClick} {...commonProps}>
      {text}
    </StyledButton>
  );
