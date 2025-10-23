import { CheckCircle2, InfoIcon, TriangleAlert, XCircle } from "lucide-react";
import { cn } from "../../utilities/cn";
import styles from "./Banner.module.css";

export const Banner = ({ title, description, status = "neutral" }) => {
  const bannerClasses = cn(styles.banner, styles[status]);
  let statusIcon;

  switch (status) {
    case "success":
      statusIcon = <CheckCircle2 size="20px" />;
      break;
    case "warning":
      statusIcon = <TriangleAlert size="20px" />;
      break;
    case "error":
      statusIcon = <XCircle size="20px" />;
      break;
    case "neutral":
      statusIcon = <InfoIcon size="20px" />;
      break;
    default:
      statusIcon = <InfoIcon size="20px" />;
      break;
  }

  return (
    <div className={bannerClasses}>
      {statusIcon}
      <div className={styles.copy}>
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};
