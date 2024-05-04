import { Container, FilterContainer, StyledNavLink } from "./styles";
import { Props } from "./types";

export function Navbar({ buttons }: Props) {
  return (
    <Container>
      <FilterContainer>
        {buttons.map((element) =>
          buttons.indexOf(element) == 0 ? (
            <StyledNavLink
              to={``}
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "underline", color: "black" }
                  : { textDecoration: "none" }
              }
              end
            >
              {element}
            </StyledNavLink>
          ) : (
            <StyledNavLink
              to={`${element.toLowerCase()}`}
              style={({ isActive }) =>
                isActive
                  ? { textDecoration: "underline", color: "black" }
                  : { textDecoration: "none" }
              }
            >
              {element}
            </StyledNavLink>
          )
        )}
      </FilterContainer>
    </Container>
  );
}
