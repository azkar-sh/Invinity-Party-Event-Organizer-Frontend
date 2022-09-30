import facebookLogo from "../../assets/img/icons/facebook.png";
import instagramLogo from "../../assets/img/icons/instagram.png";
import twitterLogo from "../../assets/img/icons/twitter.png";
import whatsAppLogo from "../../assets/img/icons/whatsapp.png";
import logo from "../../assets/img/Inviticket.png";
import "./index.css";

export default function Footer() {
  return (
    <div>
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 border-top justify-content-evenly">
          <div className="col mb-2">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="Inviticket Logo" className="size-logo" />
            </a>
            <p className="text-muted">Find events you love with our</p>
            <section className="mb-4">
              <a className="btn btn-floating" href="#!" role="button">
                <img src={facebookLogo} alt="" />
              </a>

              <a className="btn btn-floating" href="#!" role="button">
                <img src={instagramLogo} alt="" />
              </a>

              <a className="btn btn-floating" href="#!" role="button">
                <img src={twitterLogo} alt="" />
              </a>

              <a className="btn btn-floating" href="#!" role="button">
                <img src={whatsAppLogo} alt="" />
              </a>
            </section>
          </div>

          <div className="col mb-3">
            <h5>Inviticket</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  About Us
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Blog
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Payments
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Features</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Booking
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Create Event
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Discover
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div className="col mb-3">
            <h5>Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Partnership
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Help
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Terms of Services
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Privacy
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Policy
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <small className="d-block mb-3 text-muted mx-5">
          © 2022 Inviticket All Right Reserved
        </small>
      </div>
    </div>
  );
}
