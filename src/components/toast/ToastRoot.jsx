import { useEffect, useId, useState } from "react";
import { ToastContext } from "./context/ToastContext";
import { useGlobalToast } from "./hooks/useGlobalToast";

export const ToastRoot = ({
  children,
  variant = "success",
  duration = 3000,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toastId = useId();
  const { registerToast, unregisterToast } = useGlobalToast();

  useEffect(() => {
    if (isOpen) {
      registerToast(toastId, variant);
    } else {
      unregisterToast(toastId);
    }

    return () => {
      unregisterToast(toastId);
    };
  }, [isOpen, toastId, variant, registerToast, unregisterToast]);

  // Auto-dismiss timer
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [isOpen, duration]);

  return (
    <ToastContext.Provider value={{ isOpen, setIsOpen, toastId, variant }}>
      {children}
    </ToastContext.Provider>
  );
};
