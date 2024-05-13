import { Container, VanElementContainer } from "./style";
import { Headline } from "../../../../components/General/styles";
import { VanElement } from "./VanElement/index";
import { useEffect, useState } from "react";
import { Van } from "../../../../server/types";
import { LinkedStyle } from "./VanElement/style";
import { getHostVans } from "../../../../components/api";

export default function HostVansList() {
  const [vans, setVans] = useState<Van[]>();
  useEffect(() => {
    async function loadVans() {
      const data = await getHostVans();
      setVans(data);
    }
    loadVans();
  }, []);
  return (
    <Container>
      <Headline>Your listed vans</Headline>
      <VanElementContainer>
        {vans?.map((van) => (
          <LinkedStyle to={van.id}>
            <VanElement
              key={van.imageUrl}
              title={van.name}
              img={van.imageUrl}
              price={van.price}
            />
          </LinkedStyle>
        ))}
      </VanElementContainer>
    </Container>
  );
}
