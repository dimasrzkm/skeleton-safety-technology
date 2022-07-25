import "./main.scss";
export default function Main() {
  return (
    <main className="main" id="about">
      <div className="about" >
        <div className="about-small">
          <div className="wrapper-text-about">
            <h4>About the Company</h4>
            <h1>Serving for more than 22 years car and home owners.</h1>
            <p>
              Our main activity is comfort accessories for vehicles
              installation, security of sites, offices, apartments planning and
              implementation of its systems.
            </p>
          </div>
          <div className="wrapper-image-about">
            <img
              src="about_the_company.png"
              alt="about_the_company"
              className="thumbnail"
            />
          </div>
        </div>
        <div className="about-small-right">
          <div className="wrapper-text-about">
            <h4>Our outstanding references</h4>
            <h1>
              Our outstanding references are dealerships services provided to.
            </h1>
            <p>
              Which, in addition to the installation of protection systems for
              new cars, extends to the customers' special also to fulfill your
              wishes — We also undertake the purchase and installation of
              additional equipment.
            </p>
            <p>
              Development of the mechanical and electronic devices we use
              continuously follows the rapidly changing needs- the trained team
              of professionals in our modernly equipped workshop with its help,
              we can realize your unique ideas as well.
            </p>
            <p>
              We have factory installation instructions for perfect
              installation. As a result, there are no unnecessary trials and the
              installation time is also reduced.
            </p>
          </div>
          <div className="wrapper-image-about">
            <img
              src="outstanding_references.png"
              alt="outstanding_references"
              className="thumbnail"
            />
          </div>
        </div>
        <div className="about-small trust">
          <div className="wrapper-text-about">
            <h4>Trust</h4>
            <h1>
              We are available for asset protection activities all necessary
              police— and with chamber permission.
            </h1>
            <p>
              Our activities are also rated as excellent by the Police and the
              Property Protection Chamber evaluates during regular inspections—
              we are proud that our work is not only recognized, but also
              recommended.
            </p>
          </div>
          <div className="wrapper-image-about">
            <img src="Trust.png" alt="trust" className="thumbnail" />
          </div>
        </div>
      </div>
      <div className="contact">
          <div className="contact-small">
            <div className="wrapper-text-contact">
              <h4>Have we piqued your interest?</h4>
              <h1>Contact us! Call us anytime if you think— would you use our services!</h1>
              <p>We are always available</p>
            </div>
            <div className="wrapper-image-contact">
              <img src="Contact.png" alt="contact" />
            </div>
          </div>
        </div>
    </main>
  );
}
