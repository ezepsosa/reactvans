import { Headline } from "../../components/General/styles";
import { Container } from "./styles";

export const NotFoundPage = (): JSX.Element => (
  <Container>
    <Headline fontSize="1.7rem" fontWeight={700}>
      404 Not found
    </Headline>
    <Headline fontSize="1.5rem" fontWeight={400}>
      It seems nobody has built nothing in this page yet ...
    </Headline>
    <Headline fontSize="1.5rem" fontWeight={400}>
      Are you sure you want to stay here today? We can't found anything in this
      place!!
    </Headline>
  </Container>
);
