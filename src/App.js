/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useNetwork from "./hooks/use-network";

function App() {
  const handleNetworkChange = online => {
    console.log(online ? "We just went online" : "we are just went offline");
  }
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>{onLine ? "online" : "offline"}</div>
  );
}

export default App;
