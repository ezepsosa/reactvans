import { NavLink } from "react-router-dom";
import { Container, FilterContainer } from "./styles";
import { Props } from "./types";

export function Navbar({ buttons }: Props) {
  console.log();
  console.log(
    window.location.pathname
      .substring(1, window.location.pathname.length)
      .toLowerCase()
      .includes("review")
      ? "underline"
      : "none"
  );
  return (
    <Container>
      <FilterContainer>
        {buttons.map((element) => (
          <NavLink
            to={element.toLowerCase() == "dashboard" ? "/host" : `${element}`}
            style={({ isActive }) => {
              return isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" };
            }}
          >
            {element}
          </NavLink>
        ))}
      </FilterContainer>
    </Container>
  );
}

{
  /*
  <NavLink
            to={element}
            className={({ isActive }) => (isActive ? "active" : "dsds")}
          >
            {element}
          </NavLink>
          */
}
