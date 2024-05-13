import { useVan } from "..";
import { Span } from "../../../../../../components/General/styles";
import { Container } from "./styles";

export function PricingTabHostVan() {
  const { van } = useVan();
  return (
    <Container>
      <Span fontWeight={500} fontSize="1.5rem" color="#161616">
        ${van.price}
      </Span>
      <Span fontWeight={500} fontSize="1rem" color="#4D4D4D">
        /day
      </Span>
    </Container>
  );
}
