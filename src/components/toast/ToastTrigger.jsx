import { useToast } from "./hooks/useToast";
import { cloneElement } from "react";

export const ToastTrigger = ({ children, asChild }) => {
  const { setIsOpen } = useToast();

  const triggerProps = {
    onClick: () => {
      setIsOpen((prev) => !prev);
    },
  };

  if (asChild) {
    return cloneElement(children, { ...triggerProps });
  }

  return <span {...triggerProps}>{children}</span>;
};
