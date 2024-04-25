import { useContext } from "react";
import Button from "../Button/Button";
import { MenuContext } from "./Menu";

export default function MenuButton({ children }: { children: string }) {
  const { openMenu } = useContext(MenuContext);
  return <Button onClick={openMenu}>{children}</Button>;
}
