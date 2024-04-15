import { useContext, ReactNode } from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleButton({ children }: { children: ReactNode }) {
  const { toggle } = useContext(ToggleContext);
  return <div onClick={toggle}>{children}</div>;
}
