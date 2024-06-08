import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import Login from "./components/Login";
import User from "./components/User";
import Admin from "./components/Admin";
import { CourseContextProvider } from "./components/context/courseContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="app">
        <CourseContextProvider>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/" element={<User />} />
            <Route path="/Admin" element={<Admin />} />
          </Routes>
        </CourseContextProvider>
      </div>
    </>
  );
}

export default App;
