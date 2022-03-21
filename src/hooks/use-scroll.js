/** @format */

import React from "react";

function useScroll() {
  const [state, setState] = React.useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setState({
      x: window.screenX,
      y: window.scrollY,
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
}

export default useScroll;
