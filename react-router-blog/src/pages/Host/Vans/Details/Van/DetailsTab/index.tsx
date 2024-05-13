import { useVan } from "..";
import { Text } from "../../../../../../components/General/styles";
import { Container } from "./styles";

export function DetailsTabHostVan() {
  const { van } = useVan();
  return (
    <Container>
      <Text fontWeight={500} fontSize="0.9rem" color="#161616">
        <b>Name</b>: {van.name}
      </Text>
      <Text fontWeight={500} fontSize="0.9rem" color="#161616">
        <b>Category</b>: {van.type}
      </Text>
      <Text fontWeight={500} fontSize="0.9rem" color="#161616">
        <b>Description</b>: {van.description}
      </Text>
      <Text fontWeight={500} fontSize="0.9rem" color="#161616">
        <b>Visibility</b>: {van.hostId}
      </Text>
    </Container>
  );
}
