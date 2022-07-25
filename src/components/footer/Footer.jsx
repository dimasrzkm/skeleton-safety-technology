import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-menus">
        <section className="headquarter">
          <header className="title">HEADQUARTER</header>
          <ul className="body-menu">
            <li>Menlo Park, CA 94025</li>
            <li>Phone: (+1) 123 456 789</li>
            <li>Fax: 12/345-678</li>
          </ul>
        </section>
        <section className="motovehicle">
          <header className="title">MOTOVEHICLE</header>
          <ul className="body-menu">
            <li>John Doe</li>
            <li>(+1) 123 456 789</li>
            <li>motovehicle@skeleton.com</li>
          </ul>
        </section>
        <section className="safety">
          <header className="title">SAFETY</header>
          <ul className="body-menu">
            <li>Jonathan Hewitt</li>
            <li>(+1) 123 456 789</li>
            <li>safety@skeleton.com</li>
          </ul>
        </section>
      </div>
      <p className="footer-copyright">
        COPYRIGHT © 2022 SKELETON SAFETY TECHNOLOGY INC. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
