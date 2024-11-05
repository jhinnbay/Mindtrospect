import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);
  function scrollFunc() {
    let header = document.getElementById("header");
    if (window.scrollY >= 60) {
      header.classList.add("sticky");
    } else header.classList.remove("sticky");
  }
  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
  }, []);
  const location = useLocation();
  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);
  useEffect(() => {
    window.scrollTo(0, 0);
    setMenu(false);
    document.body.classList.remove("active");
  }, [location]);
  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };
  return (
    <header className="header" id="header">
      <div className="header__inner">
        <nav className={"nav " + (menu ? "active" : "")} onClick={close}>
          <ul className="nav__inner">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">Architect</a>
            </li>
            <li>
              <a href="#features">Benefits</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#experience">Microdosing Kit</a>
            </li>
            <a href="#" className="button secondary">
              Buy Kit
            </a>
            <a href="#" className="button uniq">
              Begin 30-Day
            </a>
          </ul>
        </nav>
        <div
          className="burger__outer"
          id="menuBtn"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          <div className={"burger " + (menu ? "active" : "")}>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}
