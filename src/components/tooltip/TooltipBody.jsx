import { useContext } from "react";
import { TooltipContext } from "./TooltipContext";

export const TooltipBody = () => {
  const { isOpen } = useContext(TooltipContext);

  return <>{isOpen && <h2>TOOLTIP BODY</h2>}</>;
};
