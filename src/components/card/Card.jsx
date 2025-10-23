import { DessertIcon, UploadCloud } from "lucide-react";
import styles from "./Card.module.css";

export const Card = ({ title, description, hovered = false, ...rest }) => {
  return (
    <div
      className={styles.card}
      data-hovered={hovered ? "true" : "false"}
      {...rest}
    >
      <div className={styles.icon}>
        <UploadCloud />
      </div>
      <div className={styles.copy}>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
