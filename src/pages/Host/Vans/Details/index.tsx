import { useEffect, useState } from "react";
import { Text } from "../../../../components/General/styles";
import { Van } from "../../../../server/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Container, ContainerText } from "./styles";
import VanInfo from "./Van";
import { getHostVansDetails } from "../../../../components/api";
import { ShowError } from "../../../../components/ShowError";
import { ShowLoading } from "../../../../components/Loading";

export default function HostVansDetails() {
  const { id } = useParams<string>();
  const [van, setVan] = useState<Van>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVansDetails(id ? id : "");
        setVan(data);
        setError(false);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [id]);
  if (error) {
    return ShowError();
  }
  if (loading) {
    return ShowLoading();
  }
  return (
    <Container>
      {!loading && (
        <div>
          <ContainerText>
            <FaArrowLeft fontSize="0.8rem" style={{ marginRight: "0.25rem" }} />
            <Link to="../">
              <Text fontSize="0.8rem">Back to all vans</Text>
            </Link>
          </ContainerText>
          {van && <VanInfo van={van}></VanInfo>}
        </div>
      )}
    </Container>
  );
}
