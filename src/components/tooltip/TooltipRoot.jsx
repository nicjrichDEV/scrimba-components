import { useState, useId } from "react";
import { TooltipContext } from "./context/TooltipContext";

export const TooltipRoot = ({ children, persistent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const anchorId = useId();
  const anchorName = `--tooltip-${anchorId.replace(/:/g, "-")}`;

  const contextValues = {
    isOpen,
    setIsOpen,
    anchorName,
    persistent,
  };

  return (
    <TooltipContext.Provider value={contextValues}>
      <div>{children}</div>
    </TooltipContext.Provider>
  );
};
