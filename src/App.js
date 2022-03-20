/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useBeforeLeave from './hooks/use-beforeLeave';

function App() {
  useBeforeLeave(() => console.log("Wait, I give you coupon!"));

  return (
    <div>
      <h1>Hi</h1>
    </div>
  );
}

export default App;
