import assets from "../../assets";
import { Button } from "../../components/Button";
import { Headline, Text } from "../../components/styles";
import { Container, ContainerImg } from "./style";
function Home() {
  return (
    <ContainerImg
      style={{
        backgroundImage: "url(" + assets.homepageimg + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <Container>
        <Headline>You got the travel plans, we got the travel vans.</Headline>
        <Text>
          Add adventure to your life by joining the #vanlife movement.
          <br /> Rent the perfect van to make your perfect road trip.
        </Text>
        <Button
          text="Find your van"
          to="vans"
          mediaheight="3rem"
          mediawidth="14rem"
        ></Button>
      </Container>
    </ContainerImg>
  );
}

export default Home;
