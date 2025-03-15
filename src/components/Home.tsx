import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Projects from "./Projects";
import Entry from "./Entry";

function Home() {
  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Portfolio
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/projects">
                  Projects
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="flex-grow-1">
          <Routes>
            <Route path="/projects" element={<Projects />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/"
              element={
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
                  <h1 className="display-1 fw-bold text-center">WELCOME</h1>
                </div>
              }
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default Home;
