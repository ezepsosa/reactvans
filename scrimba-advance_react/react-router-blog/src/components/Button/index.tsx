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
  mediaheight,
  width,
  mediawidth,
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
      mediaheight={mediaheight}
      mediawidth={mediawidth}
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
      mediaheight={mediaheight}
      mediawidth={mediawidth}
    >
      {text}
    </StyledButton>
  );
