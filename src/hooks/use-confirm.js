/** @format */

import React from "react";

function useConfirm(message = "", onConfirm, onCancle) {
  function confirmAction() {
    if (typeof onConfirm !== "function" || typeof onCancle !== "function")
      return;
    if (window.confirm(message)) onConfirm();
    else onCancle();
  }

  return confirmAction;
}

export default useConfirm;
