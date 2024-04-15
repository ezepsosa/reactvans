import { ReactNode } from "react";

export default function MenuDropdown({
  children,
}: //open,
{
  children: ReactNode;
  open?: boolean;
}) {
  return <div className="menu-dropdown">{children}</div>;
}
