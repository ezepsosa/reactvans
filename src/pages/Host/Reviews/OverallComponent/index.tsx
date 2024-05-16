import { Container, ContainerTextTogether } from "./style";
import { Text } from "../../../../components/General/styles";
import { FaStar } from "react-icons/fa";
import { Props } from "./types";

export function OverallComponent({ reviews }: Props) {
  console.log(reviews);
  return (
    <Container>
      <ContainerTextTogether>
        <Text fontWeight={700} color="#161616" fontSize="2rem">
          Your reviews
        </Text>
        <Text fontWeight={500} color="#4D4D4D">
          last 30 days
        </Text>
      </ContainerTextTogether>
      <ContainerTextTogether>
        <Text fontWeight={700} color="#161616" fontSize="1.6rem">
          5.0
        </Text>
        <FaStar color="FF8C38"></FaStar>
        <Text fontWeight={500} color="#161616">
          overall rating
        </Text>
      </ContainerTextTogether>
    </Container>
  );
}
