import { Card } from "../components/card/Card";
import styles from "./Page.module.css";

export function CardPage() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <section className={styles.section}>
          <h2>Cards</h2>
          <div className={styles.componentGroup}>
            <div className={styles.cards}>
              <Card
                title="Easy Deployment"
                description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
              />
              <Card
                title="Easy Deployment"
                description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
                hovered={true}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

