import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { Van } from "../../../server/types";
import {
  Container,
  ContainerButton,
  ContainerInfo,
  ContainerText,
  DescriptionContainer,
  Img,
  ImgContainer,
} from "./style";
import { Button } from "../../../components/Button/index";
import { Headline, Span, Text } from "../../../components/General/styles";
import { FaArrowLeft } from "react-icons/fa";
import { getVansDetails } from "../../../components/api";
import { ShowError } from "../../../components/ShowError";
import { ShowLoading } from "../../../components/Loading";

export default function VansDetail() {
  const param = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [van, setVan] = useState<Van>();
  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVansDetails(param.id ? param.id : "");
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
  }, [param.id]);
  const backgroundcolor =
    van?.type == "simple"
      ? "#E17654"
      : van?.type == "luxury"
      ? "#161616"
      : "#115E59";

  const hoverbackgroundcolor =
    van?.type == "simple"
      ? "#f5a187"
      : van?.type == "luxury"
      ? "#424242"
      : "#10756f";
  const previousstate = useLocation().state;

  if (error) {
    return ShowError();
  }
  if (loading) {
    return ShowLoading();
  }

  return (
    <ContainerInfo>
      <Link
        to={`../${previousstate ? `?${previousstate}` : ""}`}
        state={previousstate}
      >
        <ContainerText>
          <FaArrowLeft fontSize="0.8rem" style={{ marginRight: "0.25rem" }} />
          <Text fontSize="0.8rem">Back to all vans</Text>
        </ContainerText>
      </Link>
      {!loading && (
        <Container>
          <ImgContainer>
            <Img src={van?.imageUrl}></Img>
          </ImgContainer>
          <DescriptionContainer>
            <Button
              text={
                van
                  ? van.type.substring(0, 1).toUpperCase() +
                    van.type.substring(1, van.type.length)
                  : ""
              }
              mediaheight="2rem"
              mediawidth="5.3rem"
              backgroundcolor={backgroundcolor}
              hoverbackgroundcolor={hoverbackgroundcolor}
              color="#FFEAD0"
              width="6rem"
            ></Button>
            <Headline fontWeight={700} fontSize="2rem">
              {van?.name}
            </Headline>
            <Span fontWeight={600} fontSize="1.5rem" color="#161616">
              ${van?.price}
            </Span>
            <Span fontWeight={500} fontSize="1.2rem" color="#161616">
              /day
            </Span>
            <Text fontWeight={500} fontSize="1rem" color="#161616">
              {van?.description}
            </Text>
            <ContainerButton>
              {" "}
              <Button
                mediaheight="3rem"
                mediawidth="20rem"
                text="Rent this van"
              ></Button>
            </ContainerButton>
          </DescriptionContainer>
        </Container>
      )}
    </ContainerInfo>
  );
}
