import { useContext } from "react";
import { GlobalTooltipContext } from "../context/TooltipGlobalContext";

export const useGlobalTooltip = () => {
  const context = useContext(GlobalTooltipContext);

  if (!context) {
    throw new Error(
      "useGlobalTooltip must be used within the GlobalTooltipProvider"
    );
  }

  return context;
};
