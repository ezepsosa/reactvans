import { Container, ContainerInfo, TextVanElement } from "./style";
import { Img } from "./style";
import { Props } from "./types";
import { Span } from "../../../../../components/General/styles";

export function VanElement({ title, img, price }: Props) {
  return (
    <Container>
      <Img src={img} alt="Van image" />
      <ContainerInfo>
        <TextVanElement>{title}</TextVanElement>
        <Span fontSize="0.9rem">{price}$/day</Span>
      </ContainerInfo>
    </Container>
  );
}
