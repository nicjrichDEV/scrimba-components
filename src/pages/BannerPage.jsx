import { Banner } from "../components/banner/Banner";
import styles from "./Page.module.css";

export function BannerPage() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <section className={styles.section}>
          <h2>Banners</h2>
          <div className={styles.componentGroup}>
            <div className={styles.bannerMulti}>
              <Banner
                title="Update available"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
              />
              <Banner
                title="Congratulations!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
                status="success"
              />
              <Banner
                title="Attention!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
                status="warning"
              />
              <Banner
                title="There is a problem with your application!"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam."
                status="error"
              />
            </div>
            <div className={styles.bannerMulti}>
              <Banner title="Update available" />
              <Banner title="Congratulations!" status="success" />
              <Banner title="Attention!" status="warning" />
              <Banner
                title="There is a problem with your application!"
                status="error"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
