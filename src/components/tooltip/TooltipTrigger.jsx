import { useTooltip } from "./TooltipRoot";
import { cloneElement } from "react";

export const TooltipTrigger = ({ children, asChild }) => {
  const { setIsOpen } = useTooltip();

  const eventHandlers = {
    onMouseEnter: () => setIsOpen(true),
    onMouseLeave: () => setIsOpen(false),
    onFocus: () => setIsOpen(true),
    onBlur: () => setIsOpen(false),
  };

  if (asChild) {
    return cloneElement(children, eventHandlers);
  }

  return <span {...eventHandlers}>{children}</span>;
};
