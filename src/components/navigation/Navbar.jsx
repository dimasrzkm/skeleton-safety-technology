import "./Navbar.scss";

export default function Navbar() {
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
      <div className="navbar-right">
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
      </div>
    </nav>
  );
}
