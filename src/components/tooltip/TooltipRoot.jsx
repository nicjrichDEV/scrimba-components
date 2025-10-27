import { useState } from "react";
import { TooltipContext } from "./TooltipContext";

export const TooltipRoot = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contextValues = {
    isOpen,
    setIsOpen,
  };

  return (
    <TooltipContext.Provider value={contextValues}>
      <div>{children}</div>
    </TooltipContext.Provider>
  );
};
