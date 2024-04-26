import { Span } from "../../components/styles";
import { StyledFooter } from "./style";

export default function Footer({ textFooter }: { textFooter: string }) {
  return (
    <StyledFooter>
      <Span>{textFooter}</Span>
    </StyledFooter>
  );
}
