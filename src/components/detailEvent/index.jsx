import React from "react";
import groupPeople from "../../assets/img/detailEvent/Group People.png";
import maps from "../../assets/img/detailEvent/maps.png";

export default function DetailEvent(props) {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 mt-5">
          <img
            src={`https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${props.data.image}`}
            alt="Event 1"
            className="d-block mx-auto w-75 rounded-5 mb-4"
          />
          <h4 className="text-center mb-5">❤ Add to Wishlist</h4>
        </div>
        <div className="col-md-5 mb-4 mt-5">
          <h1 className="fw-bold mb-3">{props.data.name}</h1>
          <div className="row mb-4">
            <div className="col-md-6">
              <small> 📍 {props.data.location}</small>
            </div>
            <div className="col-md-6">
              <small> 🕓 {props.data.dateTimeShow}</small>
            </div>
          </div>
          <div
            className="row mb-2
          "
          >
            <div className="col">
              <small>Attendace</small>
            </div>
          </div>
          <div className="row mb-5">
            <img src={groupPeople} alt="" className="w-25" />
          </div>
          <hr />
          <div className="row">
            <div className="col mb-1">
              <h5>EVENT DETAIL</h5>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <small className="text-muted">
                {/* Description of Movie Exhibition */}
                {props.data.detail}
              </small>
            </div>
          </div>
          <div className="row">
            <div className="col mb-5">
              <small className="fw-bold">Price: {props.data.price}</small>
            </div>
          </div>
          <div className="row">
            <div className="col mb-1">
              <h6>LOCATION</h6>
            </div>
          </div>
          <div className="row">
            <div className="col md-6 mb-5">
              <img src={maps} alt="" className="w-75 rounded-4 shadow" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <a
                className="btn btn-primary shadow bg-primary mb-5"
                href="booking.html"
                role="button"
                style={{ width: "100%" }}
              >
                Buy Ticket
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
