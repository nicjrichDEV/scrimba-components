import styles from "./Home.module.css";

export function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.header}>
        <h1>Scrimba Components</h1>
        <p>A collection of reusable UI components</p>
      </header>

      <div className={styles.content}>
        <p className={styles.description}>
          Explore the component library by navigating through the menu. Each
          component includes interactive examples and variations.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Badge</h2>
            <p>Colorful labels and status indicators</p>
          </div>
          <div className={styles.card}>
            <h2>Banner</h2>
            <p>Alert and notification messages</p>
          </div>
          <div className={styles.card}>
            <h2>Card</h2>
            <p>Content containers with hover effects</p>
          </div>
          <div className={styles.card}>
            <h2>Testimonial</h2>
            <p>Customer quotes and reviews</p>
          </div>
          <div className={styles.card}>
            <h2>Tooltip</h2>
            <p>Contextual help and information</p>
          </div>
          <div className={styles.card}>
            <h2>Toast</h2>
            <p>Non-intrusive notifications</p>
          </div>
        </div>
      </div>
    </div>
  );
}

