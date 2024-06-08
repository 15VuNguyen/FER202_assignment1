import React, { useState, useRef, useEffect } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const userRef = useRef();
  const errRef = useRef();

  useEffect(() => {
    userRef.current.focus();
  });

  useEffect(() => {
    setError("");
  }, [user, pwd]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (user === "admin" && pwd === "123456") {
      setSuccess(true);
      setError("");
      setTimeout(() => {
        window.location.href = "/Admin";
      }, 2000);
    } else {
      setError("Invalid Username or Password");
      setSuccess(false);
      alert("Invalid Username or Password");
    }
  };

  return (
    <>
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
    </>
  );
}
