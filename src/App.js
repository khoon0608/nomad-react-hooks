/** @format */

import {
  getMouseEventOptions,
  isElementType,
} from "@testing-library/user-event/dist/utils";
import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useNotification from "./hooks/use-notification";



function App() {
  const triggerNotif = useNotification("Can blah blah", {
    body: "I love blah blah"
  });
  return (
    <div style={{ height: "1000vh" }}>
      <button onClick={triggerNotif}>click</button>
    </div>
  );
}

export default App;
