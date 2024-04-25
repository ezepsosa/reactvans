import { useState } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

export default function useToggle({
  initialValue = false,
  onToggle,
}: {
  initialValue?: boolean;
  onToggle?: () => void;
}): [boolean, () => void] {
  const [on, setOn] = useState(initialValue);

  function toggle() {
    setOn((prevOn: boolean) => !prevOn);
  }

  useEffectOnUpdate({ on: on }, onToggle);

  return [on, toggle];
}
