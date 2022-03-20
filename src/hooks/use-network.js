/** @format */

import React from "react";

function useNetwork(onChange) {
  const [status, setStatus] = React.useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  React.useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("online", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("online", handleChange);
    };
  }, []);
  return status;
}

export default useNetwork;
