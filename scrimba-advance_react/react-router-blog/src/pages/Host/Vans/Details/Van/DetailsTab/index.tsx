import { useVan } from "..";
import { Text } from "../../../../../../components/General/styles";
import { Container } from "./styles";

export function DetailsTabHostVan() {
  const { van } = useVan();
  //TODO: Check why navbar goes center when having more text. (Try to keep only the first Text component and save to check behaviour)
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
