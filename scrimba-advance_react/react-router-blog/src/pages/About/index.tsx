import { Link } from "react-router-dom";
import { Headline, Text } from "../../components/styles";
import {
  AboutContainer,
  BannerContainer,
  CardContainer,
  Img,
  TextContainer,
} from "./style";
import { Button } from "../../components/Button";

export default function About() {
  return (
    <>
      <BannerContainer>
        <Img src="src/assets/banner_about.jpg" alt="Descripción de la imagen" />
      </BannerContainer>
      <AboutContainer>
        <TextContainer>
          <Headline color="#000" fontWeight={700}>
            Don’t squeeze in a sedan when you could relax in a van.
          </Headline>
          <Text>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉){" "}
            <br /> Our team is full of vanlife enthusiasts who know firsthand
            the magic of touring the world on 4 wheels.
          </Text>
        </TextContainer>
        <CardContainer>
          <Headline color="#000" fontWeight={600} fontSize="1.5rem">
            {" "}
            Your destination is waiting. Your van is ready.
          </Headline>
          <Link to="/vans" className="btn btn-secondary"></Link>
          <Button
            padding="0.9rem 2rem"
            backgroundcolor="#000000"
            hoverbackgroundcolor="#2e2e2e"
            text="Explore our vans"
            to="vans"
          />
        </CardContainer>
      </AboutContainer>
    </>
  );
}
