/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useScroll from "./hooks/use-scroll";

function App() {
  const { y: height } = useScroll();

  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: height > 1000 ? "red" : "blue" }}>
        Hi
      </h1>
    </div>
  );
}

export default App;
