import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Alert } from "react-bootstrap";
import axios from "axios";

const RegisterScreen = () => {
  // State to handle internal control inputs
  const [voterId, setVoterId] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // state to handle empty field input
  const [emptyInput, setEmptyInput] = useState(false);

  // state to handle unmatched passwords
  const [unMatchedPasswords, setUnMatchedPasswords] = useState(false);

  // function to handle form submit
  const HandleFormSubmit = (e) => {
    e.preventDefault();
    setEmptyInput(false);
    setUnMatchedPasswords(false);

    // checking for emptyInputs in any field
    if (
      voterId === "" ||
      fullName === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setEmptyInput(true);
    } else {
      if (password !== confirmPassword) {
        setUnMatchedPasswords(true);
      } else {
      }
    }
  };

  return (
    <>
      <Container>
        <Form className="mt-3" onSubmit={HandleFormSubmit}>
          {/* Conditionally rendering the empty input alert */}
          {emptyInput && (
            <Alert
              className="text-center"
              variant="danger"
              onClose={() => setEmptyInput(false)}
              dismissible
            >
              Please fill All Fields!
            </Alert>
          )}

          {/* conditionally rendering the unmatched passwords error */}
          {unMatchedPasswords && (
            <Alert
              variant="danger"
              className="text-center"
              onClose={() => setUnMatchedPasswords(false)}
              dismissible
            >
              Passwords Do Not Match!
            </Alert>
          )}

          <Form.Group className="mt-3">
            <Form.Label>Voter Id :</Form.Label>
            <Form.Control
              type="number"
              placeholder="10716598"
              size="lg"
              onChange={(e) => setVoterId(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mt-2">
            <Form.Label>Full Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Yeboah Benson"
              size="lg"
              onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password :</Form.Label>
            <Form.Control
              type="password"
              placeholder="***********"
              size="lg"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Confirm Password :</Form.Label>
            <Form.Control
              type="password"
              placeholder="***********"
              size="lg"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
          <p>
            Already Have An Account ? Click
            <NavLink to="/auth/login"> here</NavLink> to login
          </p>

          <p>
            Forget Password ? Click <NavLink to="/auth/register">here</NavLink>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default RegisterScreen;
