/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const inputRef = React.useRef();
  setTimeout(() => {inputRef.current.focus();}, 3000);

  // 3초 뒤 input에 focus 이벤트 발생

  return (
    <div>
      <input ref={inputRef} type='text' />
    </div>
  );
}

export default App;
