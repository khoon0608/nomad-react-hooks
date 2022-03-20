/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useFadeIn from "./hooks/use-fadeIn";

function App() {
  const fadeInH1 = useFadeIn();
  return (
    <div>
      <h1 {...fadeInH1}>Hi</h1>
    </div>
  );
}

export default App;
