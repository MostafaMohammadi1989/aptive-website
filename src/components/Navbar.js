import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assest/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handelClick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo company" />
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              F&Q
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Contacts
            </Link>
          </li>
        </ul>
        <div className="humberger" onClick={handelClick}>
          {click ? (
            <FaTimes style={{ color: "#ffffff" }} />
          ) : (
            <FaBars style={{ color: "#ffffff" }} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
