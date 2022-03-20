/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useClick from "./hooks/use-click"

function App() {
  function sayHello() {
    alert("Hello");
  }

  const title = useClick(sayHello);

  return (
    <div>
      <h1 id='test' ref={title}>
        Click Me
      </h1>
    </div>
  );
}

export default App;
