/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useTitle from "./hooks/use-title";

function App() {
  const titleUpdater = useTitle("loading...");
  setTimeout(() => titleUpdater("home") /* setTitle("home") */, 5000);
  return <div></div>;
}

export default App;
