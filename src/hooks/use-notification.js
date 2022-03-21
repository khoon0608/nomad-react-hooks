import React from "react";

function useNotification(title, options) {
  if (!(Notification in window)) return;

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "grant")
          new Notification(title, getMouseEventOptions);
        else return;
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
}

export default useNotification;