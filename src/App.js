/** @format */

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    count: 0,
  };
  modify = (n) => {
    this.setState({
      count: n,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <span>{count}</span>
        <button onClick={() => this.modify(count + 1)}>Increase</button>
      </div>
    );
  }
}


// 훅을 사용하기 전의 컴포넌트 코딩방식

export default App;
