import { useState } from "react";
import { Modal, Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, details }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Col size={12} sm={6} md={4} className="d-flex justify-content-center">
        <div
          className="proj-imgbx text-center"
          onClick={() => setShowModal(true)}
          style={{cursor:"pointer"}}
          title="Click to view Details"
        >
          <img src={imgUrl} className="img-fluid mx-auto d-block" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </Col>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imgUrl} className="img-fluid w-100 rounded mx-auto d-block" alt={title} />
          <p style={{ color: "black" }}>{description}</p>
          <h5 style={{ color: "black" }}>Key Features:</h5>
          <ul className="modal-list">
            {details.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="custom-close-btn"
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
