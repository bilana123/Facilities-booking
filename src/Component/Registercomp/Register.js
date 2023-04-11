import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";

function Register() {
  const emailRef = useRef(null);
  const PasswordRef = useRef(null);
  const PasswordConfirmedRef = useRef(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (PasswordRef.current.value !== PasswordConfirmedRef.current.value) {
      return setError("passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await Register(emailRef.current.value, PasswordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center" mb-2>
            Register
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={PasswordRef} required />
            </Form.Group>
            <Form.Group id="password-confirmed">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                ref={PasswordConfirmedRef}
                required
              />
            </Form.Group>
            <br></br>
            <Button disabled={loading} lassName="w-100" type="submit">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? Login
      </div>
    </>
  );
}

export default Register;
