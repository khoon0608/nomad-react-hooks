/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useInput from "./hooks/use-input";

function App() {
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr.", maxLen);

  return (
    <div>
      <h1>Hello</h1>
      <input type='text' placeholder='Name' {...name} />
    </div>
  );
}

// useInput을 사용하면 인풋의 입력을 다른 함수에서 처리할 수 있다.

export default App;
