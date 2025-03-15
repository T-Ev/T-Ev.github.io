import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Projects from "./components/Projects";

function App() {
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
                <Nav.Link as={Link} to="/">
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
            <Route
              path="/"
              element={
                <div className="text-center py-5">
                  <h1 className="display-4 mb-4">Welcome</h1>
                  <p className="lead">
                    Welcome to my portfolio. Check out my{" "}
                    <Link to="/projects" className="text-decoration-none">
                      projects
                    </Link>
                    !
                  </p>
                </div>
              }
            />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
