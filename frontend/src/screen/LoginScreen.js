import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const LoginScreen = () => {
  return (
    <>
      <Container>
        <Form className="mt-3">
          <Form.Group className="mt-3">
            <Form.Label>Voter Id :</Form.Label>
            <Form.Control type="number" placeholder="10716598" size="lg" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password :</Form.Label>
            <Form.Control type="password" placeholder="***********" size="lg" />
          </Form.Group>

          <Button variant="outline-dark" type="submit">
            Submit
          </Button>
          <p className="mt-3">
            New Account ? Click <NavLink to="/auth/register">here</NavLink> to
            register
          </p>

          <p className="mt-3">
            Forget Password ? Click <NavLink to="/auth/register">here</NavLink>
          </p>
        </Form>
      </Container>
    </>
  );
};

export default LoginScreen;
