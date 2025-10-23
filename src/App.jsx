import "./App.css";
import { Badge } from "./components/badge/Badge";
import { Banner } from "./components/banner/Banner";

function App() {
  return (
    <>
      <section>
        <h2>Badges</h2>
        <div className="badges-square">
          <Badge color="red">Badge</Badge>
          <Badge color="yellow">Badge</Badge>
          <Badge color="green">Badge</Badge>
          <Badge color="blue">Badge</Badge>
          <Badge color="indigo">Badge</Badge>
          <Badge color="purple">Badge</Badge>
          <Badge color="pink">Badge</Badge>
        </div>
        <div className="badges-pill">
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
      </section>
      <section>
        <h2>Banners</h2>
        <div className="banner-multi">
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
        <div className="banner-multi">
          <Banner title="Update available" />
          <Banner title="Congratulations!" status="success" />
          <Banner title="Attention!" status="warning" />
          <Banner
            title="There is a problem with your application!"
            status="error"
          />
        </div>
      </section>
    </>
  );
}

export default App;
