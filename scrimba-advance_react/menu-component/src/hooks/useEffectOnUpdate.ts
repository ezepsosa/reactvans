import { useEffect, useRef } from "react";
interface Ideps {
  on?: boolean;
}

function useEffectOnUpdate(deps: Ideps, callbackFunction?: () => void) {
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (callbackFunction) {
        callbackFunction();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deps]);
}

export default useEffectOnUpdate;
