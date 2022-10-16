import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
import { useDispatch } from "react-redux";

import {
  updateDataEvent,
  deleteDataEvent,
  getDataEvent,
} from "../../stores/actions/event";

export default function ListEvent(props) {
  const dateShow = moment(props.data.dateTimeShow).format("dddd, DD MMM");
  const dateOnly = moment(props.data.dateTimeShow).format("DD");
  const monthOnly = moment(props.data.dateTimeShow).format("ddd");
  const [form, setForm] = useState(props.data);
  const [formImage, setFormImage] = useState(props.data.image);

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

  const handleImage = (e) => {
    setFormImage(e.target.files[0]);
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("category", form.category);
    formData.append("location", form.location);
    formData.append("detail", form.detail);
    formData.append("dateTimeShow", form.dateTimeShow);
    formData.append("price", form.price);
    formData.append("image", formImage);
    dispatch(updateDataEvent(eventIdData, formData)).then(() => {
      dispatch(getDataEvent());
      alert("Update Event Success");
      window.location.reload();
    });
  };

  const handleDelete = () => {
    dispatch(deleteDataEvent(eventIdData)).then(() => {
      dispatch(getDataEvent());
      alert("Delete Event Success");
      window.location.reload();
    });
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
          <button
            className="btn btn-sm text-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleGetId}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />

      {/* Modal for Update Event */}
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
                    onChange={handleImage}
                  />
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

      {/* Modal for Delete Event */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="deleteEventModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 text-danger"
                id="deleteEventModalLabel"
              >
                Warning!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p> Are you sure want delete the event? </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
