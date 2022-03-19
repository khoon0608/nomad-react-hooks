/** @format */

import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}></button>
    </div>
  );
}

// 훅을 사용하는 현재 방식

export default App;
