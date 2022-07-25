import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-text-wrapper">
        <h4>Security technology is a matter of trust</h4>
        <h2>Who should we choose?</h2>
        <h5>Who do we trust the most?</h5>
      </div>
      <div className="header-hero-wrapper">
        <img src="Group.svg" alt="group" />
      </div>
      <div className="learnmore-wrapper">
        <h5>Learn more</h5>
        <img src="icon_keyboard_down.png" alt="keyboard_down" />
      </div>
    </header>
  );
}