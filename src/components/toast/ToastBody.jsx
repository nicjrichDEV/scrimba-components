import { CheckCircle2, CircleAlertIcon, CircleX, InfoIcon } from "lucide-react";
import { useToast } from "./hooks/useToast";
import { useGlobalToast } from "./hooks/useGlobalToast";
import styles from "./Toast.module.css";
import { createPortal } from "react-dom";
import { cn } from "../../utilities/cn";

export const ToastBody = ({ title, description }) => {
  const { isOpen, variant, toastId } = useToast();
  const { getToastIndex } = useGlobalToast();
  let toastIcon;

  switch (variant) {
    case "success":
      toastIcon = <CheckCircle2 />;
      break;
    case "warning":
      toastIcon = <CircleAlertIcon />;
      break;
    case "info":
      toastIcon = <InfoIcon />;
      break;
    case "error":
      toastIcon = <CircleX />;
      break;
    default:
      toastIcon = <CircleAlertIcon />;
      break;
  }

  if (!isOpen) return null;

  const index = getToastIndex(toastId);

  const toastClasses = cn(styles.toast, styles[variant]);

  return createPortal(
    <div
      className={toastClasses}
      style={{
        bottom: "24px",
        right: "24px",
        transform: `translateY(-${index * 80}px)`,
      }}
    >
      {toastIcon}
      <div>
        <h6>{title}</h6>
        <p>{description}</p>
      </div>
    </div>,
    document.body
  );
};
