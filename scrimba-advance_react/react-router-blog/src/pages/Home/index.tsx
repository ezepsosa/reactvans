import { PrimaryButton } from "../../components/Button";
import { Headline, Text } from "../../components/styles";
import { Container } from "./style";
function Home() {
  return (
    <Container
      style={{
        backgroundImage: 'url("../../home_image_5.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
      }}
    >
      <Headline>You got the travel plans, we got the travel vans.</Headline>
      <Text>
        Add adventure to your life by joining the #vanlife movement.
        <br /> Rent the perfect van to make your perfect road trip.
      </Text>
      <PrimaryButton text="Find your van" to="vans"></PrimaryButton>
    </Container>
  );
}

export default Home;
