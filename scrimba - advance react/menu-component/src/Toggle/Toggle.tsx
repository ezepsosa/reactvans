import { createContext, useState, ReactNode, useEffect, useRef } from "react";

const ToggleContext = createContext({ on: false, toggle: () => {} });

export default function Toggle({
  children,
  onToggle,
}: {
  children: ReactNode;
  onToggle?: () => void;
}) {
  const [on, setOn] = useState(false);
  const firstRender = useRef(true);
  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (onToggle) {
        onToggle();
      }
    }
  }, [on]);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

export { ToggleContext };
