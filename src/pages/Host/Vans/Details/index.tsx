import { useEffect, useState } from "react";
import { Text } from "../../../../components/General/styles";
import { Van } from "../../../../server/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Container, ContainerText } from "./styles";
import VanInfo from "./Van";
import { getHostVansDetails } from "../../../../components/api";

export default function HostVansDetails() {
  const { id } = useParams<string>();
  const [van, setVan] = useState<Van>();
  useEffect(() => {
    async function loadVans() {
      const data = await getHostVansDetails(id ? id : "");
      setVan(data);
    }
    loadVans();
  }, [id]);

  return (
    <Container>
      <ContainerText>
        <FaArrowLeft fontSize="0.8rem" style={{ marginRight: "0.25rem" }} />
        <Link to="../">
          <Text fontSize="0.8rem">Back to all vans</Text>
        </Link>
      </ContainerText>
      {van ? <VanInfo van={van}></VanInfo> : null}
    </Container>
  );
}
