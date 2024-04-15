import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuDropdown from "./components/Menu/MenuDropdown";
import Toggle from "./Toggle/Toggle";
import ToggleButton from "./Toggle/ToggleButton";
import ToggleOn from "./Toggle/ToggleOn";
import MenuItem from "./components/Menu/MenuItem";
import Star from "./components/Star";

export function App() {
  return (
    <>
      <Star></Star>
      
      <br />
      <Toggle>
        <ToggleButton>
          <Menu>
            <MenuButton>Sports</MenuButton>

            <MenuDropdown>
              <ToggleOn>
                <MenuItem>Home</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>Blog</MenuItem>
              </ToggleOn>
            </MenuDropdown>
          </Menu>
        </ToggleButton>
      </Toggle>
    </>
  );
}
