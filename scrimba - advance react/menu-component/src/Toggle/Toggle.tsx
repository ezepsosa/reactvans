import { createContext, ReactNode } from "react";
import useEffectOnUpdate from "../hooks/useEffectOnUpdate";
import useToggle from "../hooks/useToggle";

const ToggleContext = createContext({ on: false, toggle: () => {} });

export default function Toggle({
  children,
  onToggle,
}: {
  children: ReactNode;
  onToggle?: () => void;
}) {
  const [on, toggle] = useToggle({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffectOnUpdate(
    {
      on,
    },
    onToggle
  );

  return (
    <ToggleContext.Provider value={{ toggle, on }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
