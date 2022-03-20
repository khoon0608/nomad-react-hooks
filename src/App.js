/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useFadeIn from "./hooks/use-fadeIn";

function App() {
  const fadeInH1 = useFadeIn(5);
  const fadeInH3 = useFadeIn(10);
  return (
    <div>
      <h1 {...fadeInH1}>This is h1</h1>

      <h3 {...fadeInH3}>This is h3</h3>
    </div>
  );
}

export default App;
