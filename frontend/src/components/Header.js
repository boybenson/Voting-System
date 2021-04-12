import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* Nav Bar Logo */}
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                alt=""
                src="/images/logo.jfif"
                width="60"
                height="60"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/auth/login">
                <Nav.Link>Signin</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/auth/login">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>

              <NavDropdown title={"More"} id="collasible-nav-dropdown">
                <LinkContainer to="/t">
                  <NavDropdown.Item className="dropdown__link">
                    Update Profile
                  </NavDropdown.Item>
                </LinkContainer>

                <NavDropdown.Divider />

                <LinkContainer to="/j">
                  <NavDropdown.Item>Logout</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/auth/login">
                <Nav.Link>Logout</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
