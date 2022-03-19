/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useTabs from "./hooks/use-tabs";

const content = [
  {
    tap: "Section 1",
    content: "Section 1 content",
  },
  {
    tap: "Section 2",
    content: "Section 2 content",
  },
];



function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tap}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

// useInput을 사용하면 인풋의 입력을 다른 함수에서 처리할 수 있다.

export default App;
