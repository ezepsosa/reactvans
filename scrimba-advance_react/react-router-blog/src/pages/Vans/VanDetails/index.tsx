import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Van } from "../../../server/types";
import { Container, DescriptionContainer, Img, ImgContainer } from "./style";
import { Button } from "../../../components/Button/index";
import { Headline, Span, Text } from "../../../components/styles";

export default function VansDetail() {
  const param = useParams();
  const [van, setVan] = useState<Van>();
  console.log(param.id);
  useEffect(() => {
    fetch(`/api/vans/${param.id}`)
      .then((res) => res.json())
      .then((res) => setVan(res.van)); // Parsea la respuesta como JSON
  }, [param.id]);
  console.log(van);
  return (
    <Container>
      <ImgContainer>
        <Img src={van?.imageUrl}></Img>
      </ImgContainer>
      <DescriptionContainer>
        <Button text={van?.type}></Button>
        <Headline>{van?.name}</Headline>
        <Span>{van?.price}</Span>
        <Text>{van?.description}</Text>
      </DescriptionContainer>
    </Container>
  );
}
