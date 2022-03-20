import React from "react";

function usePreventLeave() {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue = "";
  };

  // beforeunload는 페이지가 닫히기 전에 함수를 실행하게 해줌
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
}

export default usePreventLeave;