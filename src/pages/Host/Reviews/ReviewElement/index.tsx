import { FaStar } from "react-icons/fa";
import { Container, ContainerTextTogether } from "./style";
import { Text } from "../../../../components/General/styles";
import { Props } from "./types";

export function ReviewElement({ date, name, stars, text }: Props) {
  const starsArray = Array.from({ length: stars }, (_, index) => index);
  return (
    <Container>
      {starsArray.map((_, index) => (
        <FaStar key={index} color="FF8C38"></FaStar>
      ))}
      <ContainerTextTogether>
        <Text fontWeight={600} color="#161616">
          {name}
        </Text>
        <Text fontWeight={600} color="#8c8c8c">
          {date}
        </Text>
      </ContainerTextTogether>
      <Text color="#161616" fontWeight={500}>
        {text}
      </Text>
    </Container>
  );
}
