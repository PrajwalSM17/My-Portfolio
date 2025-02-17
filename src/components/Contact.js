import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    // Validation checks
    if (!formDetails.firstName.trim()) {
      setStatus({ success: false, message: "First name is required." });
      setButtonText("Send");
      return;
    }

    if (!formDetails.lastName.trim()) {
      setStatus({ success: false, message: "Last name is required." });
      setButtonText("Send");
      return;
    }

    if (!formDetails.email.trim()) {
      setStatus({ success: false, message: "Email is required." });
      setButtonText("Send");
      return;
    }

    if (!isValidEmail(formDetails.email)) {
      setStatus({
        success: false,
        message: "Please enter a valid email address.",
      });
      setButtonText("Send");
      return;
    }

    if (!formDetails.phone.trim()) {
      setStatus({ success: false, message: "Phone number is required." });
      setButtonText("Send");
      return;
    }

    if (!formDetails.message.trim()) {
      setStatus({ success: false, message: "Message cannot be empty." });
      setButtonText("Send");
      return;
    }

    // EmailJS template parameters
    const templateParams = {
      name: `${formDetails.firstName} ${formDetails.lastName}`,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    emailjs
      .send(
        "service_zrew4qp",
        "template_vx9acrb",
        templateParams,
        "8bD0CiC0SvIfkzC0d"
      )
      .then(
        (response) => {
          setButtonText("Send");
          setFormDetails(formInitialDetails);
          setStatus({ success: true, message: "Message sent successfully!" });
        },
        (error) => {
          console.error("Failed to send email:", error);
          setButtonText("Send");
          setStatus({
            success: false,
            message: "Something went wrong, try again.",
          });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
