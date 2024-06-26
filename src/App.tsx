import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Screening from "./pages/Screening";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Footer from "./components/Home/Footer";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="px-4 sm:px-[10%] pb-8 relative overflow-x-hidden text-body selection:bg-blue-400 selection:text-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screening" element={<Screening />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {location.pathname === "/" ? <Footer /> : null}
    </>
  );
}

export default App;
