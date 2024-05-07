import { useEffect, useState } from "react";
import { Text } from "../../../../components/General/styles";
import { Van } from "../../../../server/types";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { Container, ContainerText } from "./style";
import VanInfo from "./Van";

export default function HostVansDetails() {
  const { id } = useParams();
  const [van, setVan] = useState<Van>();
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((json) => setVan(json.vans[0]));
  }, [id]);

  return (
    <Container>
      <ContainerText>
        <FaArrowLeft fontSize="0.8rem" style={{ marginRight: "0.25rem" }} />
        <Text fontSize="0.8rem">Back to all vans</Text>
      </ContainerText>
      {van ? <VanInfo van={van}></VanInfo> : null}
    </Container>
  );
}
