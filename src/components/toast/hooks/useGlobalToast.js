import { useContext } from "react";
import { ToastGlobalContext } from "../context/ToastGlobalContext";

export const useGlobalToast = () => {
  const context = useContext(ToastGlobalContext);

  if (!context) {
    throw new Error("useGlobalToast must be used within ToastGlobalProvider");
  }

  return context;
};
