import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Entry() {
  return (
    <div className="text-center py-5">
      <h1 className="display-4 mb-4">Welcome</h1>
      <p className="lead">
        Welcome to my portfolio. Check out my{" "}
        <Link to="/home" className="text-decoration-none">
          projects
        </Link>
        <script>alert("hi");</script>!
      </p>
    </div>
  );
}

export default Entry;
