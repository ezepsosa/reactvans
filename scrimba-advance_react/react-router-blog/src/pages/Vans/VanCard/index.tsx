import { Props } from "./types";
import { Headline, Text } from "../../../components/styles";
import { Button } from "../../../components/Button/index";
import { Container, Img } from "./style";

export function VanCard({ imgUrl, price, title, type }: Props) {
  const backgroundcolor =
    type == "simple" ? "#E17654" : type == "luxury" ? "#161616" : "#115E59";
  return (
    <div>
      <Img src={imgUrl} alt={`van ${title} image`} />
      <Container>
        <Headline fontWeight={600} color="#161616" fontSize="1rem">
          {title}
        </Headline>
        <Text fontSize="1rem" fontWeight={600} color="#161616">
          {price}$/ day
        </Text>
      </Container>
      <Button
        padding="0.55rem 1.5rem"
        backgroundcolor={backgroundcolor}
        color="#FFEAD0"
        text={type}
        marginbottom="0.25rem"
      ></Button>
    </div>
  );
}
