import { BsStar, BsStarFill } from "react-icons/bs";
import Toggle from "../Toggle/Toggle";
import ToggleButton from "../Toggle/ToggleButton";
import ToggleOn from "../Toggle/ToggleOn";
import ToggleOff from "../Toggle/ToggleOff";

export default function Star({ onChange }: { onChange: () => void }) {
  return (
    <Toggle onToggle={onChange}>
      <ToggleButton>
        <ToggleOn>
          <BsStarFill className="star filled" />
        </ToggleOn>
        <ToggleOff>
          <BsStar className="star" />
        </ToggleOff>
      </ToggleButton>
    </Toggle>
  );
}
