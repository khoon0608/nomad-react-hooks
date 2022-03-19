import React from "react";
import ReactDOM from "react-dom";

export default function useInput(initialValue, vaildator) {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;

    if (typeof vaildator === "function") {
      willUpdate = vaildator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
}