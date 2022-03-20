/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import usePreventLeave from "./hooks/use-preventLeave";

function App() {
  const { enablePrevent, disablePrevent } = usePreventLeave();

  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
}

export default App;
