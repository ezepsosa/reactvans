import { Container, VanElementContainer } from "./style";
import { Headline } from "../../../../components/General/styles";
import { VanElement } from "./VanElement/index";
import { useEffect, useState } from "react";
import { Van } from "../../../../server/types";
import { LinkedStyle } from "./VanElement/style";
import { getHostVans } from "../../../../components/api";
import { ShowError } from "../../../../components/ShowError";
import { ShowLoading } from "../../../../components/Loading";

export default function HostVansList() {
  const [vans, setVans] = useState<Van[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVans(data);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  if (error) {
    return ShowError();
  }
  if (loading) {
    return ShowLoading();
  }
  return (
    <Container>
      <Headline>Your listed vans</Headline>
      {!loading && (
        <VanElementContainer>
          {vans?.map((van) => (
            <LinkedStyle to={van.id} key={van.imageUrl}>
              <VanElement
                key={van.imageUrl}
                title={van.name}
                img={van.imageUrl}
                price={van.price}
              />
            </LinkedStyle>
          ))}
        </VanElementContainer>
      )}
    </Container>
  );
}
