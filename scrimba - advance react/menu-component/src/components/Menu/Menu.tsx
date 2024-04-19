import { createContext, ReactNode } from "react";
import useToggle from "../../hooks/useToggle";

const MenuContext = createContext({ open: false, openMenu: () => {} });

export default function Menu({
  children,
  onOpen,
}: {
  children: ReactNode;
  onOpen: () => void;
}) {
  const [open, openMenu] = useToggle({ onToggle: onOpen });

  return (
    <MenuContext.Provider value={{ open, openMenu }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
}

export { MenuContext };
