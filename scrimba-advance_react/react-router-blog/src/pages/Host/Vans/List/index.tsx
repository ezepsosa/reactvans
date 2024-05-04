import { Container, VanElementContainer } from "./style";
import { Headline } from "../../../../components/General/styles";
import { VanElement } from "./VanElement/index";
import { useEffect, useState } from "react";
import { Van } from "../../../../server/types";

export default function HostVansList() {
  const [vans, setVans] = useState<Van[]>();
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((json) => setVans(json.vans));
  }, []);
  return (
    <Container>
      <Headline>Your listed vans</Headline>
      <VanElementContainer>
        {vans?.map((van) => (
          <VanElement
            key={van.imageUrl}
            title={van.name}
            img={van.imageUrl}
            price={van.price}
          />
        ))}
      </VanElementContainer>
    </Container>
  );
}
