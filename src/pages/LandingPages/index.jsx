import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bannerLandscape from "../../assets/img/Event Banner-Landscape.png";
import event1 from "../../assets/img/Event 1.jpg";
import event2 from "../../assets/img/Event 2.jpg";
import event3 from "../../assets/img/Event 3.jpg";
import groupPeople from "../../assets/img/Group People.png";
import styleBackground from "../../assets/img/LandingPage/styled-bg.png";
import styledBackground2 from "../../assets/img/LandingPage/styled-bg-2.png";
import Jakarta from "../../assets/img/LandingPage/Jakarta.png";
import Bali from "../../assets/img/LandingPage/Bali.png";
import Bandung from "../../assets/img/LandingPage/Bandung.png";
import Aceh from "../../assets/img/LandingPage/Aceh.png";
import Solo from "../../assets/img/LandingPage/Solo.png";
import Semarang from "../../assets/img/LandingPage/Semarang.png";
import Yogyakarta from "../../assets/img/LandingPage/Yogyakarta.png";
import partner1 from "../../assets/img/LandingPage/partner-1.png";
import partner2 from "../../assets/img/LandingPage/partner-2.png";
import partner3 from "../../assets/img/LandingPage/partner-3.png";
import "./index.css";

function Landing() {
  return (
    <div>
      {/* Start Header */}
      <Header />
      {/* End Header */}

      {/* Start Content */}
      <div className="card text-bg-primary rounded-0 mb-5">
        <img src={bannerLandscape} className="card-img" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container-fluid align-self-center">
            <div className="row">
              <div className="col-6">
                <h1
                  className="card-title text-white"
                  style={{ fontSize: "56px" }}
                >
                  <b>Find events you love with our</b>
                  <div className="card mt-5">
                    <div className="input-group py-2 px-2">
                      <input
                        type="text"
                        className="form-control py-1 border-0"
                        placeholder="Search Events"
                      />
                      <input
                        type="text"
                        className="form-control border-top-0 border-bottom-0 py-1"
                        placeholder="Location"
                      />
                      <button className="btn btn-primary" type="button">
                        &#10140;
                      </button>
                    </div>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="container">
        <div className="col-3 rounded-pill bg-pink p-1 text-center mx-auto">
          <snap className="text-pink letter-spacing fw-bold">
            &#8212; EVENT
          </snap>
        </div>
        <h1 className="text-center mt-5 fw-bold letter-spacing">
          Events For You
        </h1>

        <div className="container text-center w-50 mt-5 mb-5">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col">
              <a className="btn btn-light" href="#" role="button">
                {" "}
                &#x2190;
              </a>
            </div>
            <div className="col">
              <p className="fs-6">26</p>
              <p>Mon</p>
            </div>
            <div className="col">
              <p>26</p>
              <p>Tue</p>
            </div>
            <div className="col">
              <div className="border rounded-5 bg-light p-1">
                <p>27</p>
                <p>Wed</p>
              </div>
            </div>
            <div className="col">
              <p>28</p>
              <p>Thur</p>
            </div>
            <div className="col">
              <p>29</p>
              <p>Fri</p>
            </div>
            <div className="col">
              <a className="btn btn-primary" href="#" role="button">
                &#x2192;
              </a>
            </div>
          </div>
        </div>

        <section>
          <div className="container">
            <div className=" d-flex flex-card-event flex-row flex-nowrap row gap-2 overflow-auto">
              <div className="col-lg-3 d-flex align-items-stretch">
                <div className="card card-event">
                  <img src={event1} className="card-img-top" alt="..." />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                    <h6 className="event-date">Wed, Sept 28, 2022</h6>
                    <p className="card-text event-description">
                      Best Movie Exprierence in Town <br />
                      <a href="detail-event.html">
                        <img src={groupPeople} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 d-flex align-items-stretch">
                <div className="card card-event">
                  <img src={event2} className="card-img-top" alt="..." />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                    <h5 className="event-date">Mon, Jan 2, 2023</h5>
                    <p className="card-text event-description">
                      Trully Amazing Experience of Art Exhibition <br />
                      <a href="detail-event.html">
                        <img src={groupPeople} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 d-flex align-items-stretch">
                <div className="card card-event">
                  <img src={event3} className="card-img-top" alt="..." />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                    <h5 className="event-date">Wed, Sept 28, 2022</h5>
                    <p className="card-text event-description">
                      Feed Your Soul with Music <br />
                      <a href="detail-event.html">
                        <img src={groupPeople} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 d-flex align-items-stretch">
                <div className="card card-event">
                  <img src={event1} className="card-img-top" alt="..." />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                    <h5 className="event-date">Mon, Jan 2, 2023</h5>
                    <p className="card-text event-description">
                      Best Movie Exprierence in Town <br />
                      <a href="detail-event.html">
                        <img src={groupPeople} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 d-flex align-items-stretch">
                <div className="card card-event">
                  <img src={event2} className="card-img-top" alt="..." />
                  <div className="card-img-overlay d-flex flex-column justify-content-end text-white">
                    <h5 className="event-date">Wed, Sept 28, 2022</h5>
                    <p className="card-text event-description">
                      Trully Amazing Experience of Art Exhibition <br />
                      <a href="detail-event.html">
                        <img src={groupPeople} />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="d-flex justify-content-center align-items-center gap-5">
          <a className="btn btn-light" href="#" role="button">
            {" "}
            &#x2190;
          </a>
          <a className="btn btn-primary" href="#" role="button">
            &#x2192;
          </a>
        </div>

        <div className="card bg-primary rounded-5 mt-5 border-0">
          <img src={styleBackground} alt="" className="card-img" />
          <div className="card-img-overlay d-flex flex-column justify-content-evenly">
            <div className="col-3 rounded-pill bg-white bg-opacity-10 p-1 text-center mx-auto mt-2 mb-4">
              <snap className="text-white letter-spacing">
                &#8212; LOCATION
              </snap>
            </div>

            <div className="d-flex flex-column text-white ">
              <div className="row mb-3">
                <div className="col-3">
                  <span style={{ fontSize: "34px" }} id="discover-event">
                    Discover Events Near You
                  </span>
                </div>
                <div className="col-3">
                  <img src={Jakarta} alt="" className="w-100" />
                  <p className="text-center mt-3">Jakarta</p>
                </div>
                <div className="col-3">
                  <img src={Bandung} alt="" className="w-100" />
                  <p className="text-center mt-3">Bandung</p>
                </div>
                <div className="col-3">
                  <img src={Bali} alt="" className="w-100" />
                  <p className="text-center mt-3">Bali</p>
                </div>
              </div>

              <div className="row">
                <div className="col-3">
                  <img src={Aceh} alt="" className="w-100" />
                  <p className="text-center mt-3">Aceh</p>
                </div>
                <div className="col-3">
                  <img src={Solo} alt="" className="w-100" />
                  <p className="text-center mt-3">Solo</p>
                </div>
                <div className="col-3">
                  <img src={Yogyakarta} alt="" className="w-100" />
                  <p className="text-center mt-3">Yogyakarta</p>
                </div>
                <div className="col-3">
                  <img src={Semarang} alt="" className="w-100" />
                  <p className="text-center mt-3">Semarang</p>
                </div>
              </div>

              {/* Button see all location */}
              <div className="d-flex justify-content-center align-items-center">
                <a
                  className="btn btn-light w-25 letter-spacing text-primary fw-bold"
                  href="#"
                  role="button"
                >
                  See All
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div
        className="card text bg-dark-grey mt-5 rounded-0"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      >
        <img src={styledBackground2} alt="" />
        <div className="card-img-overlay d-flex flex-column justify-content-evenly">
          <div className="col-3 rounded-pill bg-secondary p-1 text-center mx-auto">
            <span className="text-white letter-spacing fw-bold">
              &#8212; PARTNER
            </span>
          </div>
          <div className="col-12 text-center">
            <span className="h1 text-white letter-spacing">
              Our Trusted Partner
            </span>
          </div>
          <div className="col-12 text-center">
            <span className="h6 text-muted letter-spacing">
              By Companies Like:
            </span>
          </div>
          <div className="d-flex flex-row align-items-center text-center">
            <div className="col">
              <img src={partner1} alt="" />
            </div>
            <div className="col">
              <img src={partner2} alt="" />
            </div>
            <div className="col">
              <img src={partner3} alt="" />
            </div>
            <div className="col">
              <img src={partner1} alt="" />
            </div>
            <div className="col">
              <img src={partner2} alt="" />
            </div>
            <div className="col">
              <img src={partner3} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* End Content */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}

export default Landing;
