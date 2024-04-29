import { Button } from "../Button";
import { Container, FilterContainer } from "./styles";
import { Props } from "./types";

export const Filter = ({ filters }: Props): JSX.Element => (
  <Container>
    <FilterContainer>
      {" "}
      {filters.map((element) => (
        <Button
          text={element}
          backgroundcolor="#FFEAD0"
          color="black"
          padding="0.7rem 2rem"
          hoverbackgroundcolor="#ffe5c4"
        ></Button>
      ))}
    </FilterContainer>
    <Button
      backgroundcolor="transparent"
      text="Clear filters"
      hoverbackgroundcolor="transparent"
      color="black"
      textDecoration="underline"
      hovercolor="#404040"
    ></Button>
  </Container>
);
