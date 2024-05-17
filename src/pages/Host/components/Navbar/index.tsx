import { Container, FilterContainer, StyledNavLink } from "./styles";
import { Props } from "./types";

export function Navbar({ buttons, largescreen = false }: Props) {
  return (
    <Container largescreen={largescreen.toString()}>
      <FilterContainer>
        {buttons.map((element) => (
          <StyledNavLink
            to={`${element.toLowerCase()}`}
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline", color: "black" }
                : { textDecoration: "none" }
            }
            key={element.toLowerCase()}
          >
            {element}
          </StyledNavLink>
        ))}
      </FilterContainer>
    </Container>
  );
}
