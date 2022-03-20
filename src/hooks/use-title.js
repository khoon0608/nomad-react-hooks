import React from "react";

export default function useTitle(initialTitle) {
  const [title, setTitle] = React.useState(initialTitle);

  // function updateTitle() {
  //   const htmlTitle = document.querySelector("title");
  //   htmlTitle.innerText = title;
  // }

  React.useEffect(() => updateTitle(), [title]);
  // title의 값이 변경될 때 마다 updateTitle이 실행
  return setTitle;
}