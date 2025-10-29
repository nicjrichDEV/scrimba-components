import { Testimonial } from "../components/testimonial/Testimonial";
import styles from "./Page.module.css";

export function TestimonialPage() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <section className={styles.section}>
          <h2>Testimonial</h2>
          <div className={styles.componentGroup}>
            <Testimonial
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
              name="May Andersons"
              business="Workcation, CTO"
            />
            <Testimonial
              quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
              name="May Andersons"
              business="Workcation, CTO"
              variant="picture"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

