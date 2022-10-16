import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideNavbar from "../../components/SideNavbar";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { createDataEvent, getDataEvent } from "../../stores/actions/event";

export default function CreateEvent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState();
  const [showPreview, setShowPreview] = useState(false);
  const [preview, setPreview] = useState();
  const [data, setData] = useState({
    name: "",
    category: "",
    location: "",
    detail: "",
    dateTimeShow: "",
    price: "",
  });

  // const event = useSelector((state) => state.event);

  const handleCreateEvent = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("category", data.category);
    formData.append("location", data.location);
    formData.append("detail", data.detail);
    formData.append("dateTimeShow", data.dateTimeShow);
    formData.append("price", data.price);
    formData.append("image", selectedFile);
    dispatch(createDataEvent(formData)).then(() => {
      dispatch(getDataEvent());
      alert("Create Event Success");
      navigate("/manage-event");
    });
  };

  const handleImage = (e) => {
    setSelectedFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (!showPreview) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setShowPreview(undefined);
      return;
    }

    setShowPreview(e.target.files[0]);
  };
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="container-fluid bg-light py-5">
        <div className="container">
          <div className="d-flex flex-row">
            <div className="col-sm-4">
              {/* Side Navbar */}
              <SideNavbar />
            </div>
            <div className="col-sm-8">
              <div className="container bg-white rounded-5">
                <div className="px-4 pt-5">
                  <h2>Create Event</h2>
                  <hr />
                </div>
                <div className="row px-4 py-3">
                  <div className="col-sm-12">
                    {/* Form Create Event */}
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
                      <label className="col-sm-3 col-form-label">
                        Category
                      </label>
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
                      <label className="col-sm-3 col-form-label">
                        Location
                      </label>
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
                          onChange={(e) => {
                            onSelectFile(e);
                            handleImage(e);
                          }}
                        />
                        {selectedFile && (
                          <img src={preview} className="w-100" />
                        )}
                      </div>
                    </div>

                    <div className="my-5 row">
                      <div className="col-sm-6">
                        <button
                          type="submit"
                          className="btn btn-primary w-50"
                          name="submit"
                          onClick={handleCreateEvent}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
