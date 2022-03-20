import React from "react";

function useBeforeLeave(onBefore) {
  React.useEffect(() => {
    if (typeof onBefore !== "function") return;


    // chrome에서는 "mouseleave", firefox에서는 "mouseout"
    document.addEventListener("mouseout", () => onBefore());
    return () => document.removeEventListener("mouseout", () => onBefore());
  }, []);
}

export default useBeforeLeave;