/** @format */

import React from "react";

function useFadeIn(duration) {
  const element = React.useRef();

  React.useEffect(() => {
    if (element.current) {
      const { current } = element;

      current.style.opacity = 1;
      current.style.transition = `opacity ${duration}s`;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
}

// 5초후 h1이 나타남

export default useFadeIn;
