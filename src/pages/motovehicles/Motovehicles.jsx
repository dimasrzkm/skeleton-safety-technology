import Button from "../../components/Button";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navigation/Navbar";
import "./motovehicles.scss";

export default function Motovehicles() {
  return (
    <>
      <Navbar />
      <header className="header">
        <div className="moto-text-wrapper">
          <h4>Reversing camera</h4>
          <h2>
            Reversing. <br /> Now safer.
          </h2>
          <h5>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            quaerat amet sapiente consequuntur libero suscipit quam id, optio
            quod iusto nihil, commodi aliquam dolor iste! Nisi repellat qui
            suscipit magnam.
          </h5>
          <Button additionalClass={"blue-button"} />
        </div>
        <div className="moto-hero-wrapper">
          <img src="Motovehicles.png" alt="motovehicles" />
        </div>
      </header>
      <main className="main">
        <div className="wrapper">
          <div className="motovehicle-component">
            <div className="wrapper-text-motovehicle">
              <h4>Traffipax radar</h4>
              <h1>
                Speeding.
                <br />
                Everybody loves it.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis quaerat amet sapiente consequuntur libero suscipit
                quam id, optio quod iusto nihil, commodi aliquam dolor iste!
                Nisi repellat qui suscipit magnam.
              </p>
              <Button additionalClass={"blue-button"} />
            </div>
            <div className="wrapper-image-motovehicle">
              <img
                src="motovehicles_1.png"
                alt="motovehicles 1"
                className="thumbnail"
              />
            </div>
          </div>
          <div className="motovehicle-component">
            <div className="wrapper-text-motovehicle">
              <h4>Seat heating</h4>
              <h1>
                Warm.
                <br /> Everybody loves it.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis quaerat amet sapiente consequuntur libero suscipit
                quam id, optio quod iusto nihil, commodi aliquam dolor iste!
                Nisi repellat qui suscipit magnam.
              </p>
              <Button additionalClass={"blue-button"} />
            </div>
            <div className="wrapper-image-motovehicle">
              <img src="Downloads.png" alt="downloads" className="thumbnail" />
            </div>
          </div>
          <div className="motovehicle-component">
            <div className="wrapper-text-motovehicle">
              <h4>Traffipax radar</h4>
              <h1>
                Speeding.
                <br />
                Everybody loves it.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis quaerat amet sapiente consequuntur libero suscipit
                quam id, optio quod iusto nihil, commodi aliquam dolor iste!
                Nisi repellat qui suscipit magnam.
              </p>
              <Button additionalClass={"blue-button"} />
            </div>
            <div className="wrapper-image-motovehicle">
              <img
                src="motovehicles_1.png"
                alt="motovehicles 1"
                className="thumbnail"
              />
            </div>
          </div>
          <div className="motovehicle-component">
            <div className="wrapper-text-motovehicle">
              <h4>Seat heating</h4>
              <h1>
                Warm.
                <br /> Everybody loves it.
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Blanditiis quaerat amet sapiente consequuntur libero suscipit
                quam id, optio quod iusto nihil, commodi aliquam dolor iste!
                Nisi repellat qui suscipit magnam.
              </p>
              <Button additionalClass={"blue-button"} />
            </div>
            <div className="wrapper-image-motovehicle">
              <img src="Downloads.png" alt="downloads" className="thumbnail" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
