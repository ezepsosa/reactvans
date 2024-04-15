import { createContext, useState, ReactNode, useEffect } from "react";

const ToggleContext = createContext({ on: true, toggle: () => {} });

export default function Toggle({
  children,
  onToggle,
}: {
  children: ReactNode;
  onToggle?: () => void;
}) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (onToggle) {
      onToggle();
    }
  }, [on, onToggle]);

  function toggle() {
    setOn((prevOn) => !prevOn);
  }

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
