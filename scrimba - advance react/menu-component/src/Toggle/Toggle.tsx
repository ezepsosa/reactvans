import { createContext, useState, ReactNode } from "react";

const ToggleContext = createContext({ on: true, toggle: () => {} });

export default function Toggle({ children }: { children: ReactNode }) {
  const [on, setOn] = useState(false);

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
