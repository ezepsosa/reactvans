import { createContext, ReactNode } from "react";

const MenuContext = createContext({
  open: false,
  toggle: () => {},
});

export default function Menu({ children }: { children: ReactNode }) {
  return <div className="menu">{children}</div>;
}

export { MenuContext };
