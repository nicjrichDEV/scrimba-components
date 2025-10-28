import { useState, useCallback } from "react";
import { ToastGlobalContext } from "./context/ToastGlobalContext";

export const ToastGlobalProvider = ({ children }) => {
  const [activeToasts, setActiveToasts] = useState([]);

  const registerToast = useCallback((id, variant) => {
    setActiveToasts((prev) => {
      const newIndex = prev.length;

      return [...prev, { id, index: newIndex, variant }];
    });
  }, []);

  const unregisterToast = useCallback((id) => {
    setActiveToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const getToastIndex = useCallback(
    (id) => {
      const toast = activeToasts.find((toast) => toast.id === id);
      return toast?.index ?? 0;
    },
    [activeToasts]
  );

  return (
    <ToastGlobalContext.Provider
      value={{ registerToast, unregisterToast, getToastIndex, activeToasts }}
    >
      {children}
    </ToastGlobalContext.Provider>
  );
};
