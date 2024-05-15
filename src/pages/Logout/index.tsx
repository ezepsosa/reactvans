import { Headline } from "../../components/General/styles";
import { Container } from "./styles";

export function Logout() {
  localStorage.removeItem("usertokenlogged");

  return (
    <Container>
      <Headline fontSize="1.7rem" fontWeight={700}>
        See you soon !
      </Headline>
      <Headline fontSize="1.5rem" fontWeight={400}>
        You succesfully logout!
      </Headline>
    </Container>
  );
}
