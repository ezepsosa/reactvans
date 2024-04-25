import Menu from "./components/Menu/Menu";
import MenuButton from "./components/Menu/MenuButton";
import MenuDropdown from "./components/Menu/MenuDropdown";
import MenuItem from "./components/Menu/MenuItem";
import Star from "./components/Star";

export function App() {
  return (
    <>
      <Star />
      <br />
      <Menu onOpen={() => console.log("hi tio")}>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Contact</MenuItem>
          <MenuItem>Blog</MenuItem>
        </MenuDropdown>
      </Menu>
    </>
  );
}
