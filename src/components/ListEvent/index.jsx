import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { updateDataEvent } from "../../stores/actions/event";

export default function ListEvent(props) {
  const dateShow = moment(props.data.dateTimeShow).format("dddd, DD MMM");
  const dateOnly = moment(props.data.dateTimeShow).format("DD");
  const monthOnly = moment(props.data.dateTimeShow).format("ddd");
  const [form, setForm] = useState(props.data);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateDetail = () => {
    navigate(`/detail/${props.data.eventId}`);
  };

  const handleGetId = () => {
    localStorage.setItem("eventId", props.data.eventId);
  };

  const eventIdData = localStorage.getItem("eventId");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = () => {
    dispatch(updateDataEvent(eventIdData, form));
    alert("Update Event Success");
  };

  return (
    <div>
      <div className="row">
        <div className="col-sm-2 d-flex justify-content-center align-items-center">
          <div className="text-center border px-4 py-4 rounded-4 shadow">
            <div className="text-danger fw-bold">{dateOnly}</div>
            <div className="text-primary fw-bold">{monthOnly}</div>
          </div>
        </div>
        <div className="col-sm-10">
          <div className="h4 mb-3">{props.data.name}</div>
          <div className="small text-muted mb-1">{props.data.location}</div>
          <div className="small text-muted mb-2">{dateShow}</div>
          <button className="btn btn-sm text-primary" onClick={navigateDetail}>
            Detail
          </button>
          <button
            type="button"
            className="btn btn-sm text-primary"
            data-bs-toggle="modal"
            data-bs-target="#updateEventModal"
            onClick={handleGetId}
          >
            Update
          </button>
          <button className="btn btn-sm text-danger">Delete</button>
        </div>
      </div>
      <hr />
      <div
        className="modal fade"
        id="updateEventModal"
        tabIndex="-1"
        aria-labelledby="updateEventModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="updateEventModalLabel">
                Update Event
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Name</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control w-100"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Category</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control w-100"
                    name="category"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Location</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control w-100"
                    name="location"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Detail</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control w-100"
                    name="detail"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">
                  Date and Time Show
                </label>
                <div className="col-sm-9">
                  <input
                    type="datetime-local"
                    className="form-control w-100"
                    name="dateTimeShow"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Price</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control w-100"
                    name="price"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-3 col-form-label">Image</label>
                <div className="col-sm-9">
                  <input
                    type="file"
                    className="form-control w-100 mb-2"
                    name="image"
                    // onChange={(e) => {
                    // onSelectFile(e);
                    // handleImage(e);
                    // }}
                  />
                  {/* {selectedFile && <img src={preview} className="w-100" />} */}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
