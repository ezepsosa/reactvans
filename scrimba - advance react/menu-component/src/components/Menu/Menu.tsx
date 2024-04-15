import { createContext, ReactNode } from "react";
import Toggle from "../../Toggle/Toggle";

const MenuContext = createContext({
  open: false,
  toggle: () => {},
});

export default function Menu({ children }: { children: ReactNode }) {
  return (
    <Toggle>
      <div className="menu">{children}</div>{" "}
    </Toggle>
  );
}

export { MenuContext };
