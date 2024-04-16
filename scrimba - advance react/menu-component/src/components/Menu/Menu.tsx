import { ReactNode } from "react";
import Toggle from "../../Toggle/Toggle";

export default function Menu({
  children,
  onOpen,
}: {
  children: ReactNode;
  onOpen?: () => void;
}) {
  return (
    <Toggle onToggle={onOpen}>
      <div className="menu">{children}</div>{" "}
    </Toggle>
  );
}
