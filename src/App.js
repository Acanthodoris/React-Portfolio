import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-white bg-dark">Rebeccah May Mullan</h1>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/protfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;