import { Headline } from "../../components/General/styles";
import { Container } from "./styles";

export const ShowError = (): JSX.Element => (
  <Container>
    <Headline fontSize="1.7rem" fontWeight={700}>
      Error
    </Headline>
    <Headline fontSize="1.5rem" fontWeight={400}>
      There was an error loading data ...
    </Headline>
  </Container>
);
