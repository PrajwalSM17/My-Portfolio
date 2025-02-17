import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showStatus, setShowStatus] = useState(status); // New state to manage visibility

  useEffect(() => {
    if (status) {
      setShowStatus(status); // Update visibility state when status changes
      const timer = setTimeout(() => {
        setShowStatus(""); // Hide the alert after 3 seconds
        setEmail("");
      }, 3000);

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [status]);

  // Email validation function
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(""); // Clear error if email is valid
    onValidated({ EMAIL: email });
  };

  const clearFields = () => {
    setEmail("");
    setError("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to my Newsletter
              <br />& Never miss latest updates
            </h3>
            {showStatus === "sending" && <Alert>Sent</Alert>}
            {showStatus === "error" && (
              <Alert variant="danger">{message}</Alert>
            )}
            {showStatus === "success" && (
              <Alert variant="success">{message}</Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError(""); // Clear error when typing
                  }}
                  placeholder="Email Address"
                />
                <button type="submit" disabled={!isValidEmail(email)}>
                  Submit
                </button>
              </div>
              {error && <Alert variant="danger">{error}</Alert>}
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
