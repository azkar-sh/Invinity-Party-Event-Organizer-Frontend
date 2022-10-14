import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideNavbar from "../../components/SideNavbar";

import { useDispatch } from "react-redux";
import { createDataEvent } from "../../stores/actions/event";

export default function CreateEvent() {
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState();
  const [selectedFilePreview, setSelectedFilePreview] = useState();
  const [preview, setPreview] = useState();
  const [data, setData] = useState({
    name: "",
    category: "",
    location: "",
    detail: "",
    dateTimeShow: "",
    price: "",
  });

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
    dispatch(createDataEvent(formData));
  };

  const handleImage = (e) => {
    setSelectedFile(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFilePreview) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFilePreview);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFilePreview]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFilePreview(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFilePreview(e.target.files[0]);
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
                      <label className="col-sm-4 col-form-label">Name</label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          name="name"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label">
                        Category
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          name="category"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label">
                        Location
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          name="location"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label">Detail</label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          name="detail"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label">
                        Date and Time Show
                      </label>
                      <div className="col-sm-8">
                        <input
                          type="datetime-local"
                          className="form-control w-100"
                          name="confirmPassword"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label">Price</label>
                      <div className="col-sm-8">
                        <input
                          type="text"
                          className="form-control w-100"
                          name="price"
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="mb-3 row">
                      <label className="col-sm-4 col-form-label">Image</label>
                      <div className="col-sm-8">
                        <input
                          type="file"
                          className="form-control w-100 mb-2"
                          name="image"
                          onChange={(e) => {
                            onSelectFile(e);
                            handleImage(e);
                          }}
                        />
                        {selectedFilePreview && (
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
