import { StyledButton, StyledLink } from "./styles";
import { Props } from "./types";
export const Button = ({
  text,
  to,
  padding,
  backgroundcolor,
  hoverbackgroundcolor,
  color,
  textDecoration,
  hovercolor,
}: Props): JSX.Element =>
  to ? (
    <StyledLink
      padding={padding}
      hoverbackgroundcolor={hoverbackgroundcolor}
      backgroundcolor={backgroundcolor}
      color={color}
      to={to}
      textDecoration={textDecoration}
      hovercolor={hovercolor}
    >
      {text}
    </StyledLink>
  ) : (
    <StyledButton
      padding={padding}
      hoverbackgroundcolor={hoverbackgroundcolor}
      backgroundcolor={backgroundcolor}
      color={color}
      textDecoration={textDecoration}
      hovercolor={hovercolor}
    >
      {text}
    </StyledButton>
  );
