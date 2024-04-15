import { ReactNode, useContext } from "react";
import { ToggleContext } from "./Toggle";

export default function ToggleOff({ children }: { children: ReactNode }) {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
}
