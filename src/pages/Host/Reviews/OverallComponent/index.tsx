import { Container, ContainerTextTogether } from "./style";
import { Text } from "../../../../components/General/styles";
import { FaStar } from "react-icons/fa";
import { Props } from "./types";

export function OverallComponent({ reviews }: Props) {
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
          {(
            reviews.reduce(
              (accumulator, element) => accumulator + element.stars,
              0
            ) / reviews.length
          ).toPrecision(2)}
        </Text>
        <FaStar color="FF8C38"></FaStar>
        <Text fontWeight={500} color="#161616">
          overall rating
        </Text>
      </ContainerTextTogether>
    </Container>
  );
}
