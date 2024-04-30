import { StyledButton, StyledLink } from "./styles";
import { Props } from "./types";
export const Button = ({
  text,
  to,
  backgroundcolor,
  hoverbackgroundcolor,
  color,
  textDecoration,
  hovercolor,
  margintop,
  marginbottom,
  height,
  mediaHeight,
  width,
  mediaWidth,
}: Props): JSX.Element =>
  to ? (
    <StyledLink
      hoverbackgroundcolor={hoverbackgroundcolor}
      backgroundcolor={backgroundcolor}
      color={color}
      to={to}
      textDecoration={textDecoration}
      hovercolor={hovercolor}
      margintop={margintop}
      marginbottom={marginbottom}
      height={height}
      width={width}
      mediaHeight={mediaHeight}
      mediaWidth={mediaWidth}
    >
      {text}
    </StyledLink>
  ) : (
    <StyledButton
      hoverbackgroundcolor={hoverbackgroundcolor}
      backgroundcolor={backgroundcolor}
      color={color}
      textDecoration={textDecoration}
      hovercolor={hovercolor}
      margintop={margintop}
      marginbottom={marginbottom}
      height={height}
      width={width}
      mediaHeight={mediaHeight}
      mediaWidth={mediaWidth}
    >
      {text}
    </StyledButton>
  );
