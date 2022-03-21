import React from "react";

function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const element = React.useRef();
  const onTrigger = () => {
    if (element.current) {
      element.current.mozRequestFullScreen();
      setIsFullscreen(true);
    }
  };
  const exitFull = () => {
    document.mozCancelFullScreen();
    setIsFullscreen(false);
  };

  return { element, onTrigger, exitFull, isFullscreen };
}

export default useFullscreen;