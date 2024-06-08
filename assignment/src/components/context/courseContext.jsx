import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CourseContext = createContext({
  data: [],
  title: "",
  desc: "",
  number_of_weeks: "",
  image: "",
  Start_date: "",
  active: "",
  setData: () => {},
  setTitle: () => {},
  setDesc: () => {},
  setNumber_of_weeks: () => {},
  setImage: () => {},
  setStart_date: () => {},
  setActive: () => {},
  AddtoTable: () => {},
  handleFormSubmit: () => {},
  handleUpdate: () => {},
  handleDelete: () => {},
});

const API = "https://66601d7a5425580055b24077.mockapi.io/Course";

export const useCourseContext = () => useContext(CourseContext);

export function CourseContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [number_of_weeks, setNumber_of_weeks] = useState("");
  const [image, setImage] = useState("");
  const [Start_date, setStart_date] = useState("");
  const [active, setActive] = useState("");

  const AddtoTable = (newData) => {
    setData((prevData) => [...prevData, newData]);
  };

  const handleFormSubmit = (e, courseData) => {
    e.preventDefault();
    axios
      .post(API, courseData)
      .then((response) => {
        console.log(response);
        AddtoTable(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setTitle("");
    setDesc("");
    setNumber_of_weeks("");
    setImage("");
    setStart_date("");
    setActive("");
  };

  const handleUpdate = (id, updatedData) => {
    axios
      .put(`${API}/${id}`, updatedData)
      .then((response) => {
        const updatedCourse = response.data;
        setData((prevData) =>
          prevData.map((course) => (course.id === id ? updatedCourse : course))
        );
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${API}/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((course) => course.id !== id));
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const value = {
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
    AddtoTable,
    handleFormSubmit,
    handleUpdate,
    handleDelete,
  };

  return (
    <CourseContext.Provider value={value}>{children}</CourseContext.Provider>
  );
}
