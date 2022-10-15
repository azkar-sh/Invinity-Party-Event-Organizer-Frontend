import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useState } from "react";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";
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
     </div>
     </div>
     </div>
     
      </div>
    </div>
  );
}
