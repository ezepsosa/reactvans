import ToggleButton from "../../Toggle/ToggleButton";
import Button from "../Button/Button";

export default function MenuButton({ children }: { children: string }) {
  return (
    <ToggleButton>
      <Button>{children}</Button>
    </ToggleButton>
  );
}
