import styles from "./Badge.module.css";
import { cn } from "../../utilities/cn";

export const Badge = ({
  children,
  color = "gray",
  shape = "square",
  className,
  ...rest
}) => {
  const badgeClasses = cn(
    styles.badge,
    styles[color],
    styles[shape],
    className
  );

  return (
    <div className={badgeClasses} {...rest}>
      {children}
    </div>
  );
};
