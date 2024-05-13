import { Props } from "./types";
import { Headline, Text } from "../../../../components/General/styles";
import { Button } from "../../../../components/Button/index";
import { Container, ContainerCard, Img } from "./style";
import { Link } from "react-router-dom";

export function VanCard({ imgUrl, price, title, type, id }: Props) {
  const backgroundcolor =
    type == "simple" ? "#E17654" : type == "luxury" ? "#161616" : "#115E59";

  const hoverbackgroundcolor =
    type == "simple" ? "#f5a187" : type == "luxury" ? "#424242" : "#10756f";
  return (
    <Container>
      <Link style={{ textDecoration: "none" }} to={`/vans/${id}`}>
        <Img src={imgUrl} alt={`van ${title} image`} />
        <ContainerCard>
          <Headline
            fontWeight={600}
            color="#161616"
            fontSize="1.25rem"
            mediafontsize="1.5rem"
          >
            {title}
          </Headline>

          <Text fontSize="1rem" fontWeight={600} color="#161616">
            {price}$/ day
          </Text>
        </ContainerCard>
        <Button
          backgroundcolor={backgroundcolor}
          color="#FFEAD0"
          text={
            type.substring(0, 1).toUpperCase() + type.substring(1, type.length)
          }
          marginbottom="0.25rem"
          hoverbackgroundcolor={hoverbackgroundcolor}
          hovercolor="#FFEAD0"
          height="2rem"
          width="6rem"
          mediawidth="12rem"
          mediaheight="2rem"
        ></Button>
      </Link>
    </Container>
  );
}
