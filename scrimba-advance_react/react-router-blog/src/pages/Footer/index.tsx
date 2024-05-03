import { Span } from "../../components/General/styles";
import { StyledFooter } from "./style";

export default function Footer({ textFooter }: { textFooter: string }) {
  return (
    <StyledFooter>
      <Span>{textFooter}</Span>
    </StyledFooter>
  );
}
