import React, { useState, useContext, useEffect } from "react";
import Portfolio from "./components/portfolio/portfolio";
import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Contact from "./components/contact/contact";
import Works from "./components/works/works";
import "./app.scss";
import Menu from "./components/menu/menu";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="app">
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Works />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default App;
