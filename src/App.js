/** @format */

import { validate } from "json-schema";
import React from "react";
import ReactDOM from "react-dom";

import useConfirm from "./hooks/use-confirm";

function App() {
  function deleteWorld() {
    alert("deleting the world....");
  }

  function remainWorld() {
    alert("ok, next time");
  }

  const confirmDelete = useConfirm("Are you sure?", deleteWorld, remainWorld);
  /* 
    컨펌창에 들어갈 메세지, 
    컨펌창에 ok를 눌렀을 경우 실행할 함수,
    컨펌창에 no를 눟렀을 경우 실행할 함수
  */

  return (
    <div>
      <button onClick={() => confirmDelete()}>Don't click</button>
    </div>
  );
}

export default App;
