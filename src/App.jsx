import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Ministries from "./pages/Ministries";
import SermonsEvents from "./pages/SermonsEvents";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <a
        href="#main-content"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("main-content")
            ?.scrollIntoView({ behavior: "smooth" });
          document.getElementById("main-content")?.focus({ preventScroll: true });
        }}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-navy-950"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ministries" element={<Ministries />} />
          {/* <Route path="/sermons-events" element={<SermonsEvents />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </HashRouter>
  );
}
