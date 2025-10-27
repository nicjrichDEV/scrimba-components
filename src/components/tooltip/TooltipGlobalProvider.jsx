import { useState } from "react";
import { GlobalTooltipContext } from "./context/TooltipGlobalContext";

export const GlobalTooltipProvider = ({
  children,
  delay = 700,
  resetTime = 500,
}) => {
  const [isWarmedUp, setIsWarmedUp] = useState(false);

  return (
    <GlobalTooltipContext.Provider
      value={{ isWarmedUp, setIsWarmedUp, delay, resetTime }}
    >
      {children}
    </GlobalTooltipContext.Provider>
  );
};
