import styles from "./Testimonial.module.css";
import WorkcationLogo from "../../assets/workcation-logo.svg";
import { cn } from "../../utilities/cn";

export const Testimonial = ({
  variant = "no-picture",
  picture = "https://images.unsplash.com/photo-1687702563085-2f550461f24c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774",
  quote,
  name,
  business,
}) => {
  const testimonialClasses = cn(
    styles.Testimonial,
    styles[picture],
    styles["no-picture"]
  );

  return (
    <div className={testimonialClasses}>
      {variant === "picture" && <img src={picture} />}
      {variant === "no-picture" && <img src={WorkcationLogo} />}
      <h2>{quote}</h2>
      <div className={styles.bio}>
        <h6>{name}</h6>
        <p>{business}</p>
      </div>
    </div>
  );
};
