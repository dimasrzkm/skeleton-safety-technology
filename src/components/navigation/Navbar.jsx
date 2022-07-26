import { useState } from "react";
import "./Navbar.scss";

export default function Navbar() {
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
      <div className={`navbar-right ${ open ? "responsive-mobile" : "" }` }>
        <ul className="wrapper-links">
          <li>
            <a href="#" className="active">HOME</a>
          </li>
          <li>
            <a href="#">MOTOVEHICLES</a>
          </li>
          <li>
            <a href="">SAFETY</a>
          </li>
          <li>
            <a href="">DOWNLOADS</a>
          </li>
        </ul>
        <img src="hamburger-close.png" alt="menu-close" className="menu-close" onClick={handleMenuBar}/>
      </div>
      <img src="hamburger-open.png" alt="hamburger-menu" className="hamburger-icon" onClick={handleMenuBar} />
    </nav>
  );
}
