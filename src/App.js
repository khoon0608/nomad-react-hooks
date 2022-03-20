/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [number1, setNumber1] = React.useState(0);
  const [number2, setNumber2] = React.useState(0);

  const func = () => alert("func");

  // useEffect는 componentDidmount과 componentDidUpdate 역할을 함
  React.useEffect(() => {
    func();
  }, [number2]);
  // useEffect는 함수와 dependency를 인수로 받는다.
  
  // component가 mount되는 즉시 func 실행하고
  // number2의 값이 업데이트 될 때마다 실행

  return (
    <div>
      <button onClick={() => setNumber1(number1 + 1)}>{number1}</button>
      <button onClick={() => setNumber2(number2 + 1)}>{number2}</button>
    </div>
  );
}

export default App;
