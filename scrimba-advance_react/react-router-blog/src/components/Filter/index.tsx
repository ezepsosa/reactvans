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
          hoverbackgroundcolor="#ffe5c4"
          key={element}
          mediaHeight="4rem"
          mediaWidth="7rem"
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
