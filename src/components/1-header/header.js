import Logo from "./logo";
import Navbar from "./navbar";
import Search from "../3-bar/search";
import Headerleft from "./headerleft";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import "./header.css";
import { useState } from "react";

const Header = () => {
  const [Nav, SetNav] = useState(false);
  return (
    <header>
      <div className="header">
        <div className="container">
          <Logo />
          <Navbar />
          <Headerleft />
          <div
            className="HamburgerMenu"
            onClick={() => {
              SetNav(true);
            }}
          >
            <IoMdMenu />
          </div>
        </div>
      </div>
      {Nav && (
        <div className="mobile_nav">
          <div className="box">
            <div className="top-bar">
              <div
                className="Cross"
                onClick={() => {
                  SetNav(false);
                }}
              >
                <RxCross2 />
              </div>
              <Headerleft />
            </div>
            <div className="bottom-bar">
              <Logo />
              <Navbar />
            </div>
            <div className="search">
              <Search />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
