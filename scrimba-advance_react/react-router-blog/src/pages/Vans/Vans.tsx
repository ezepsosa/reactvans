import { Filter } from "../../components/Filter";
import { Headline } from "../../components/styles";
import { Container, VansContainer } from "./style";
import { VanCard } from "./VanCard/index";

export default function Vans() {
  return (
    <Container>
      <Headline>Explore our van options</Headline>
      <Filter filters={["Simple", "Luxury", "Rugged"]} />
      <VansContainer>
        <VanCard
          imgUrl="src/assets/banner_about.jpg"
          price={50}
          title="titulo"
          type="tipito"
        ></VanCard>
      </VansContainer>
    </Container>
  );
}
