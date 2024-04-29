import { Props } from "./types";
import { Headline, Text } from "../../../components/styles";
import { Button } from "../../../components/Button/index";
import { Img } from "../../About/style";
import { Container } from "./style";

export const VanCard = ({ imgUrl, price, title, type }: Props): JSX.Element => (
  <div>
    <Img src={imgUrl} alt={`van ${title} image`} />
    <Container>
      <Headline>{title}</Headline>
      <Text>{price}</Text>
    </Container>
    <Button text={type}></Button>
  </div>
);
