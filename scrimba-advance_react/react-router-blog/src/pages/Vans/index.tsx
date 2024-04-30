import { useEffect, useState } from "react";
import { Filter } from "../../components/Filter";
import { Headline } from "../../components/styles";
import { Container, VansContainer } from "./style";
import { VanCard } from "./VanCard/index";
import { Van } from "../../server/types";

export default function Vans() {
  const [vans, setVans] = useState<Van[]>([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((res) => setVans(res.vans)); // Parsea la respuesta como JSON
  }, []);

  return (
    <Container>
      <Headline>Explore our van options</Headline>
      <Filter filters={["Simple", "Luxury", "Rugged"]} />
      <VansContainer>
        {vans.map((van) => (
          <VanCard
            imgUrl={van.imageUrl}
            price={van.price}
            title={van.name}
            type={van.type}
            key={van.id}
          ></VanCard>
        ))}
      </VansContainer>
    </Container>
  );
}
