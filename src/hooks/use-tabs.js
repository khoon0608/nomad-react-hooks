/** @format */

import React from "react";

export default function useTabs(initialTab, allTabs) {
  const [currentIndex, setCurrentIndex] = React.useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) return;
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
}
