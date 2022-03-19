/** @format */

import React from "react";
import ReactDOM from "react-dom";

function useInput(initialValue) {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (event) => {
    console.log(event.target);
  };
  return { value, onChange };
}

function App() {
  const name = useInput("Mr.");

  return (
    <div>
      <h1>Hello</h1>
      <input type='text' placeholder='Name' {...name} />
    </div>
  );
}

// useInput을 사용하면 인풋의 입력을 다른 함수에서 처리할 수 있다.

export default App;
