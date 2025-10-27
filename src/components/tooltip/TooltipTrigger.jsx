import { useTooltip } from "./hooks/useTooltip";
import { cloneElement, useRef } from "react";
import styles from "./Tooltip.module.css";
import { cn } from "../../utilities/cn";
import { useGlobalTooltip } from "./hooks/useGlobalTooltip";

export const TooltipTrigger = ({ children, asChild }) => {
  const { setIsOpen, anchorName } = useTooltip();
  const { isWarmedUp, setIsWarmedUp, delay, resetTime } = useGlobalTooltip();

  // Refs for timers
  const warmupTimerRef = useRef(null);
  const cooldownTimerRef = useRef(null);

  const triggerProps = {
    onMouseEnter: () => {
      if (cooldownTimerRef.current) {
        clearTimeout(cooldownTimerRef.current);
        cooldownTimerRef.current = null;
      }

      if (isWarmedUp) {
        setIsOpen(true);
      } else {
        warmupTimerRef.current = setTimeout(() => {
          setIsOpen(true);
          setIsWarmedUp(true);
        }, delay);
      }
    },
    onMouseLeave: () => {
      if (warmupTimerRef.current) {
        clearTimeout(warmupTimerRef.current);
        warmupTimerRef.current = null;
      }

      setIsOpen(false);

      cooldownTimerRef.current = setTimeout(() => {
        setIsWarmedUp(false);
      }, resetTime);
    },
    onFocus: () => setIsOpen(true),
    onBlur: () => setIsOpen(false),
    style: {
      anchorName,
      ...children.props.style,
    },
  };

  if (asChild) {
    const props = {
      ...triggerProps,
      className: cn(styles.trigger, children.props.className),
    };
    return cloneElement(children, props);
  }

  return (
    <span {...triggerProps} className={styles.trigger}>
      {children}
    </span>
  );
};
