import { useContext } from "react";
import { TooltipContext } from "./context/TooltipContext";
import { InboxIcon } from "lucide-react";
import styles from "./Tooltip.module.css";
import { cn } from "../../utilities/cn";
import { X } from "lucide-react";

export const TooltipBody = ({
  title,
  description,
  icon = true,
  variant = "bold",
  color = "neutral",
}) => {
  const { isOpen, anchorName, persistent, setIsOpen } =
    useContext(TooltipContext);
  const tooltipBodyClasses = cn(
    styles.tooltip,
    styles[variant],
    styles[color],
    isOpen && styles.open
  );

  return (
    <>
      <div
        className={tooltipBodyClasses}
        style={{
          positionAnchor: anchorName,
        }}
      >
        {icon && <InboxIcon size="32px" />}
        <div>
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
        {persistent && (
          <button onClick={() => setIsOpen(false)}>
            <X size="32px" />
          </button>
        )}
      </div>
    </>
  );
};
