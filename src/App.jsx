import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import CmsEvent from "./component/CmsEvent";
// Enable future flags
const futureConfig = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

function App() {
  return (
    <Router future={futureConfig}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/CmsEvent" element={<CmsEvent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;