import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/1-header/header";
import Bar from "./components/3-bar/bar";
import SideBar from "./components/2-sideBar/sideBar";
import Content from "./components/4-content/content";
import Footer from "./components/5-footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Advice from "./pages/advice";
import About from "./pages/about";
import Contact from "./pages/contact";
import Register from "./pages/register";


import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <div className="main_content">
                <div className="sidebar">
                  <SideBar />
                </div>
                <div className="content_box">
                  <div className="container">
                    <Bar />
                    <Content />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/advice" element={<Advice />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
