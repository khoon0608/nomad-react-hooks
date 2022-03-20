import React from "react";

function useClick(onClick) {
  const element = React.useRef();

  React.useEffect(() => {
    if (typeof onClick !== "function") return;
    if (element.current) {
      alert("이벤트 추가");
      element.current.addEventListener("click", onClick);
    }
    // componentDidMount 때 단 한번만 실행

    return () => {
      if (element.current) {
        alert("이벤트 삭제");
        element.current.removeEventListenr("click", onClick);
      }
    };
    // componentWillUnMount 때 한번만 실행
  }, []);

  return element;
}

export default useClick;