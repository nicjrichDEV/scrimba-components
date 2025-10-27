import { createContext, useContext, useState } from "react";

const TooltipContext = createContext();

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

export const useTooltip = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw new Error("Tooltip components must be used within the TooltipRoot");
  }
  return context;
};
