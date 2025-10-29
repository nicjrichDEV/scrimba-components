import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationLayout } from "./components/navigation/NavigationLayout";
import { Home } from "./pages/Home";
import { BadgePage } from "./pages/BadgePage";
import { BannerPage } from "./pages/BannerPage";
import { CardPage } from "./pages/CardPage";
import { TestimonialPage } from "./pages/TestimonialPage";
import { TooltipPage } from "./pages/TooltipPage";
import { ToastPage } from "./pages/ToastPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavigationLayout />}>
          <Route index element={<Home />} />
          <Route path="badge" element={<BadgePage />} />
          <Route path="banner" element={<BannerPage />} />
          <Route path="card" element={<CardPage />} />
          <Route path="testimonial" element={<TestimonialPage />} />
          <Route path="tooltip" element={<TooltipPage />} />
          <Route path="toast" element={<ToastPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
