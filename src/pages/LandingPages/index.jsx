import Header from "../../components/Header";
import Footer from "../../components/Footer";
import bannerLandscape from "../../assets/img/Event Banner-Landscape.png";
import event1 from "../../assets/img/Event 1.jpg";
import event2 from "../../assets/img/Event 2.jpg";
import event3 from "../../assets/img/Event 3.jpg";
import groupPeople from "../../assets/img/Group People.png";

function Landing() {
  return (
    <div>
      {/* Start Header */}
      <Header />
      {/* End Header */}

      {/* Start Content */}
      <center>
        <img src={bannerLandscape} alt="" className="img-fluid" />
        <main className="container mt-5">
          <div className="col rounded-pill bg-light p-1 text-center">
            &#8212; EVENT
          </div>
          <h2 className="text-center mt-5">EVENT FOR YOU</h2>

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
        </main>
      </center>
      {/* End Content */}

      {/* Start Footer */}
      <Footer />
      {/* End Footer */}
    </div>
  );
}

export default Landing;
