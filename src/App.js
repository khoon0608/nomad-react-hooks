/** @format */

import { isElementType } from "@testing-library/user-event/dist/utils";
import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useFullscreen from "./hooks/use-fullscreen";

function App() {
  const { element, onTrigger, exitFull, isFullscreen } = useFullscreen();
  return (
    <div ref={element} style={{ height: "1000vh" }}>
      <img
        src='https://i1.sndcdn.com/artworks-000108435472-8lhg5d-t500x500.jpg'
        alt='img'
      />
      <button onClick={isFullscreen ? exitFull : onTrigger}>
        {isFullscreen ? "exit Fullscreen" : "make fullscreen"}
      </button>
    </div>
  );
}

export default App;
