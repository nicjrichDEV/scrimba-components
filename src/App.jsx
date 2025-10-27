import styles from "./App.module.css";
import { Badge } from "./components/badge/Badge";
import { Banner } from "./components/banner/Banner";
import { Card } from "./components/card/Card";
import { Testimonial } from "./components/testimonial/Testimonial";
import { TooltipBody } from "./components/tooltip/TooltipBody";
import { TooltipRoot } from "./components/tooltip/TooltipRoot";
import { TooltipTrigger } from "./components/tooltip/TooltipTrigger";

function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Scrimba Components</h1>
        <p>A collection of reusable UI components</p>
      </header>

      <main className={styles.main}>
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

        <section className={styles.section}>
          <h2>Tooltip</h2>
          <TooltipRoot>
            <TooltipTrigger>
              <button>Test button</button>
            </TooltipTrigger>
            <TooltipBody />
          </TooltipRoot>
        </section>
      </main>
    </div>
  );
}

export default App;
