import React, { useState } from "react";
import profilePic from "../assets/pic4-4.jpg";
import { useCourseContext } from "./context/courseContext";
import { Modal, Button } from "react-bootstrap";

export default function User() {
  const { data, title, desc, number_of_weeks, image, Start_date, active } =
    useCourseContext();

  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    setSelectedItem(item);
    setShow(true);
  };

  return (
    <>
      <div className="cardList">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img className="card_img" src={item.image} alt="card-img" />
            <h2 className="card_h2">{item.title}</h2>
            {/* <button className="btn btn-primary btn-showDetail">
            Show Details
          </button> */}
            <Button variant="primary" onClick={() => handleShow(item)}>
              Show Details
            </Button>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>
            <strong>Description:</strong> {selectedItem.desc}
          </h5>
          <h5>
            <strong>Number Of Weeks:</strong> {selectedItem.number_of_weeks}
          </h5>
          <h5>
            <strong>Start Date:</strong>{" "}
            {new Date(selectedItem.Start_date).toLocaleDateString("vi-VN")}
          </h5>
          <h5>
            <strong>Active:</strong>{" "}
            {selectedItem.active === true ? (
              <button className="btn btn-success btn-lg active">Active</button>
            ) : (
              <button className="btn btn-secondary btn-lg" disabled>
                Inactive
              </button>
            )}
          </h5>
          <img src={selectedItem.image} alt="img" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Good
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
