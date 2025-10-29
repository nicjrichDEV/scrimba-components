import { Badge } from "../components/badge/Badge";
import styles from "./Page.module.css";

export function BadgePage() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <section className={styles.section}>
          <h2>Badges</h2>
          <div className={styles.componentGroup}>
            <div className={styles.badgesSquare}>
              <Badge color="red">Badge</Badge>
              <Badge color="yellow">Badge</Badge>
              <Badge color="green">Badge</Badge>
              <Badge color="blue">Badge</Badge>
              <Badge color="indigo">Badge</Badge>
              <Badge color="purple">Badge</Badge>
              <Badge color="pink">Badge</Badge>
            </div>
            <div className={styles.badgesPill}>
              <Badge color="red" shape="pill">
                Badge
              </Badge>
              <Badge color="yellow" shape="pill">
                Badge
              </Badge>
              <Badge color="green" shape="pill">
                Badge
              </Badge>
              <Badge color="blue" shape="pill">
                Badge
              </Badge>
              <Badge color="indigo" shape="pill">
                Badge
              </Badge>
              <Badge color="purple" shape="pill">
                Badge
              </Badge>
              <Badge color="pink" shape="pill">
                Badge
              </Badge>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
