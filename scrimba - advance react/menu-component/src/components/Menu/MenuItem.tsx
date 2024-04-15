import ToggleOn from "../../Toggle/ToggleOn";

export default function MenuItem({ children }: { children: string }) {
  return (
    <ToggleOn>
      <div className="menu-item" key={children}>
        {children}
      </div>
    </ToggleOn>
  );
}
