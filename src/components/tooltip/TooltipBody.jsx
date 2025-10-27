import { useContext } from "react";
import { TooltipContext } from "./context/TooltipContext";
import { InboxIcon } from "lucide-react";
import styles from "./Tooltip.module.css";
import { cn } from "../../utilities/cn";

export const TooltipBody = ({
  title,
  description,
  icon = true,
  variant = "bold",
  color = "neutral",
}) => {
  const { isOpen, anchorName } = useContext(TooltipContext);
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
        {icon && <InboxIcon />}
        <div>
          <h6>{title}</h6>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
