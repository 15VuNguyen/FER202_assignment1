import React, { useState, useEffect, useRef } from "react";
import { useCourseContext } from "./context/courseContext";

export default function Admin() {
  const {
    data,
    title,
    desc,
    number_of_weeks,
    image,
    Start_date,
    active,
    setData,
    setTitle,
    setDesc,
    setNumber_of_weeks,
    setImage,
    setStart_date,
    setActive,
    handleFormSubmit,
    handleUpdate,
    handleDelete,
  } = useCourseContext();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setError("");
  }, [user, pwd]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (user === "admin" && pwd === "123456") {
      setSuccess(true);
      setError("");
    } else {
      setError("Invalid Username or Password");
      setSuccess(false);
      alert("Invalid Username or Password");
    }
  };

  const formId = 11;

  const [editingCourseId, setEditingCourseId] = useState(null);
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");
  const [updateNumber_of_weeks, setUpdateNumber_of_weeks] = useState("");
  const [updateImage, setUpdateImage] = useState("");
  const [updateStart_date, setUpdateStart_date] = useState("");
  const [updateActive, setUpdateActive] = useState("");

  const handleEditClick = (course) => {
    setEditingCourseId(course.id);
    setUpdateTitle(course.title);
    setUpdateDesc(course.desc);
    setUpdateNumber_of_weeks(course.number_of_weeks);
    setUpdateImage(course.image);
    setUpdateStart_date(course.Start_date);
    setUpdateActive(course.active);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editingCourseId) {
      handleUpdate(editingCourseId, {
        title: updateTitle,
        desc: updateDesc,
        number_of_weeks: updateNumber_of_weeks,
        image: updateImage,
        Start_date: updateStart_date,
        active: updateActive,
      });
      setEditingCourseId(null);
    }
  };

  return (
    <>
      {success ? (
        <div>
          <div className="container my-5 py-2">
            <div className="row align-items-center">
              <div className="col-md-10 mx-auto col-lg-7">
                <h2 className="display-4 fw-bold lh-1 text-white mb-4">
                  Enter New <span className="text-danger">Course</span>
                </h2>
                <form
                  className="p-4 p-md-5 mb-5 border rounded bg-light"
                  onSubmit={(e) =>
                    handleFormSubmit(
                      e,
                      {
                        title,
                        desc,
                        number_of_weeks,
                        image,
                        Start_date,
                        active,
                      },
                      formId
                    )
                  }
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nameInput"
                      placeholder="Enter the Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="emailInput"
                      placeholder="Enter the Description"
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingNumber"
                      placeholder="Number of weeks"
                      value={number_of_weeks}
                      onChange={(e) => setNumber_of_weeks(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingNumber"
                      placeholder="Image URL"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="date"
                      className="form-control"
                      id="floatingNumber"
                      placeholder="Start date"
                      value={Start_date}
                      onChange={(e) => setStart_date(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingNumber"
                      placeholder="Active"
                      value={active}
                      onChange={(e) => setActive(e.target.value)}
                    />
                  </div>
                  <button
                    className="btn text-white w-100 "
                    type="submit"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #112f41, #068587, #cddff4, #f2d22d, #ed553b, #452066)",
                    }}
                  >
                    <strong>Add To List</strong>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="table-list px-1 ff">
            <table className="table table-bordered px-2 hover">
              <thead>
                <tr className="table-row">
                  <th className="colors text-white" scope="col">
                    S.No
                  </th>
                  <th className="colors text-white" scope="col">
                    Title
                  </th>
                  <th className="colors text-white" scope="col">
                    Description
                  </th>
                  <th className="colors text-white" scope="col">
                    Number of weeks
                  </th>
                  <th className="colors text-white" scope="col">
                    Image
                  </th>
                  <th className="colors text-white" scope="col">
                    Start date
                  </th>
                  <th className="colors text-white" scope="col">
                    Active
                  </th>
                  <th className="colors text-white" scope="col">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((course, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {editingCourseId === course.id ? (
                        <input
                          type="text"
                          value={updateTitle}
                          onChange={(e) => setUpdateTitle(e.target.value)}
                        />
                      ) : (
                        course.title
                      )}
                    </td>
                    <td>
                      {editingCourseId === course.id ? (
                        <input
                          type="text"
                          value={updateDesc}
                          onChange={(e) => setUpdateDesc(e.target.value)}
                        />
                      ) : (
                        course.desc
                      )}
                    </td>
                    <td>
                      {editingCourseId === course.id ? (
                        <input
                          type="number"
                          value={updateNumber_of_weeks}
                          onChange={(e) =>
                            setUpdateNumber_of_weeks(e.target.value)
                          }
                        />
                      ) : (
                        course.number_of_weeks
                      )}
                    </td>
                    <td>
                      {editingCourseId === course.id ? (
                        <input
                          type="text"
                          value={updateImage}
                          onChange={(e) => setUpdateImage(e.target.value)}
                        />
                      ) : (
                        <img src={course.image} alt="Course Image" />
                      )}
                    </td>
                    <td>
                      {editingCourseId === course.id ? (
                        <input
                          type="date"
                          value={updateStart_date}
                          onChange={(e) => setUpdateStart_date(e.target.value)}
                        />
                      ) : (
                        course.Start_date
                      )}
                    </td>
                    <td>
                      {editingCourseId === course.id ? (
                        <input
                          type="text"
                          value={updateActive}
                          onChange={(e) => setUpdateActive(e.target.value)}
                        />
                      ) : course.active === true ? (
                        <button className="btn btn-success btn-lg active">
                          Active
                        </button>
                      ) : (
                        <button className="btn btn-secondary btn-lg" disabled>
                          Inactive
                        </button>
                      )}
                    </td>
                    <td>
                      {editingCourseId === course.id ? (
                        <button
                          type="button"
                          className="btn text-white"
                          style={{ backgroundColor: "#563d7c" }}
                          onClick={handleEditSubmit}
                        >
                          Update
                        </button>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="btn text-white mt-2 me-4 px-3"
                            style={{ backgroundColor: "#1f3265" }}
                            onClick={() => handleEditClick(course)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger mt-2 me-4"
                            onClick={() =>
                              window.confirm("Are you sure to delete?") &&
                              handleDelete(course.id)
                            }
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="login-page bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <h3 className="mb-3">Login Now</h3>
                <div className="bg-white shadow rounded">
                  <div className="row">
                    <div className="col-md-7 pe-0">
                      <div className="form-left h-100 py-5 px-5">
                        <form
                          action=""
                          className="row g-4"
                          onSubmit={handleLoginSubmit}
                        >
                          <div className="col-12">
                            <label className="labelLogin" htmlFor="username">
                              Username<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Username"
                                id="username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <label className="labelLogin" htmlFor="password">
                              Password<span className="text-danger">*</span>
                            </label>
                            <div className="input-group">
                              <input
                                type="password"
                                className="form-control"
                                placeholder="Enter Password"
                                id="password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required
                              />
                            </div>
                          </div>

                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn btn-primary px-4 float-end mt-4 navbar"
                            >
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-5 ps-0 d-none d-md-block colors">
                      <div className="form-right h-100 text-white text-center pt-5">
                        <i className="bi bi-bootstrap"></i>
                        <h2 className="fs-1">Welcome Back!!!</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
