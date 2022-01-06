import React, { useState, useEffect } from "react";

import "./App.css";

//Bootstrap Link
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages of website
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio.js";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
function App() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Career" element={<Careers />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
