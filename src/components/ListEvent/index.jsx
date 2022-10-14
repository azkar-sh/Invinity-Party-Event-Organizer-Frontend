import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function ListEvent(props) {
  const dateShow = moment(props.data.dateTimeShow).format("dddd, DD MMM");
  const dateOnly = moment(props.data.dateTimeShow).format("DD");
  const monthOnly = moment(props.data.dateTimeShow).format("ddd");

  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-2 d-flex justify-content-center align-items-center">
          {/* <img
            src={`https://res.cloudinary.com/drkoj1bvv/image/upload/v1663649636/${props.data.image}`}
            className="w-100 rounded-3"
          /> */}
          <div className="text-center border px-4 py-4 rounded-4 shadow">
            <div className="text-danger fw-bold">{dateOnly}</div>
            <div className="text-primary fw-bold">{monthOnly}</div>
          </div>
        </div>
        <div className="col-sm-10">
          <div className="h4 mb-3">{props.data.name}</div>
          <div className="small text-muted mb-1">{props.data.location}</div>
          <div className="small text-muted mb-2">{dateShow}</div>
          <button className="btn btn-sm text-primary" onClick={handleDetail}>
            Detail
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Update
          </button>
          <button className="btn btn-sm text-primary">Delete</button>
        </div>
      </div>
      <hr />
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
