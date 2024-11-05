import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from "./Landing/Landing";
import Footer from "./Base/Footer";
import Header from "./Base/Header";

export default function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="*" element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
