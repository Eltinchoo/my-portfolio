import "./App.css";
import Footer from "./components/Footer";
import MyNavBar from "./components/MyNavBar";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="app-container">
          <MyNavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/portfolio-martin-paredes" element={<Portfolio />} />
            <Route path="/contact-me" element={<ContactMe />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
