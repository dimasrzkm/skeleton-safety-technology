import Button from "../../components/Button";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navigation/Navbar";
import "./downloads.scss";

export default function Downloads() {
  return (
    <>
      <Navbar pageActive={"downloads"} />
      <header className="header-download">
        <div className="download-text-wrapper">
          <h4>Downloads</h4>
          <h2>
            Manuals,
            <br /> Guides.
          </h2>
          <h5>
            Here they are for software/- and of the tools we use their
            guide/handbook.
          </h5>
        </div>
        <div className="download-hero-wrapper">
          <img src="downloads_page.png" alt="downloads" />
        </div>
        <Button additionalClass={"blue-button"} />
      </header>
      <main className="main">
        <div className="wrapper-downloads">
          <div className="manual-component">
            <h2>Manuals</h2>
            <div className="manual">
              <h4>LOXONE Manual</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis quaerat amet sapiente consequuntur libero suscipit
                quam id, optio quod iusto nihil, commodi aliquam dolor iste!
                Nisi repellat qui suscipit magnam.
              </p>
              <Button additionalClass={"pink-button"} />
            </div>
            <div className="manual">
              <h4>LOXONE Manual</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis quaerat amet sapiente consequuntur libero suscipit
                quam id, optio quod iusto nihil, commodi aliquam dolor iste!
                Nisi repellat qui suscipit magnam.
              </p>
              <Button additionalClass={"pink-button"} />
            </div>
          </div>
          <div className="guides-component">
            <h2>Guides</h2>
            <div className="guides">
              <h4>LOXONE Manual</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis quaerat amet sapiente consequuntur libero suscipit
                quam id, optio quod iusto nihil, commodi aliquam dolor iste!
                Nisi repellat qui suscipit magnam.
              </p>
              <Button additionalClass={"blue-button"} />
            </div>
            <div className="guides">
              <h4>LOXONE Manual</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis quaerat amet sapiente consequuntur libero suscipit
                quam id, optio quod iusto nihil, commodi aliquam dolor iste!
                Nisi repellat qui suscipit magnam.
              </p>
              <Button additionalClass={"blue-button"} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
