import React from "react";

function useConfirm(message = "", resolve, reject) {
  function confirmAction() {
    if (typeof resolve === "function" && window.confirm(message)) resolve();
    else if (typeof reject === "function") reject();
  }

  return confirmAction;
}

export default useConfirm;