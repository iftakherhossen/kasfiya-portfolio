import AOS from "aos";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import "aos/dist/aos.css";
import ScrollToTopOnLoading from "./Components/Common/ScrollToTopOnLoading";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import SingleBlog from "./Pages/SingleBlog";

function App() {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, [])

  return (
    <Router>
      <ScrollToTopOnLoading>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#home" element={<Home />} />
          <Route path="/blog/:slug" element={<SingleBlog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTopOnLoading>
    </Router>
  );
}

export default App;