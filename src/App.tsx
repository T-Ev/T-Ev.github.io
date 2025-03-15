import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="App-nav">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </nav>

        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/"
            element={
              <header className="App-header">
                <h1>Welcome</h1>
                <p>
                  Welcome to my portfolio. Check out my <Link to="/projects">projects</Link>!
                </p>
              </header>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
