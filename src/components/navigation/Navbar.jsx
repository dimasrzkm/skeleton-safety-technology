import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

export default function Navbar({ pageActive }) {
  const [open, setOpen] = useState(false);

  function handleMenuBar() {
    setOpen(!open);
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="wrapper-logo">
          <img src="Logo.svg" alt="logo" />
          <div className="logo-text-wrapper">
            <h2>SKELETON</h2>
            <h3>Safety technology</h3>
          </div>
        </div>
      </div>
      <div className={`navbar-right ${open ? "responsive-mobile" : ""}`}>
        <ul className="wrapper-links">
          <Link to="/" className={`${pageActive === "home" ? "active" : ""}`}>
            Home
          </Link>
          <Link to="/motovehicles" className={`${pageActive === "motovehicles" ? "active" : ""}`}>MOTOVEHICLES</Link>
          <Link to="/">SAFETY</Link>
          <Link to="/downloads" className={`${pageActive === "downloads" ? "active" : ""}`}>DOWNLOADS</Link>
        </ul>
        <img
          src="hamburger-close.png"
          alt="menu-close"
          className="menu-close"
          onClick={handleMenuBar}
        />
      </div>
      <img
        src="hamburger-open.png"
        alt="hamburger-menu"
        className="hamburger-icon"
        onClick={handleMenuBar}
      />
    </nav>
  );
}
