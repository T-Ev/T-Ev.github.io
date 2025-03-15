import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

function Entry() {
  const [value, setValue] = React.useState("**Hello world!!!**");
  console.log("hi");

  const handleChange = (newValue: any) => {
    console.log("New value:", newValue);
    setValue(newValue);
  };

  return (
    <div className="text-center py-5">
      <h1 className="display-4 mb-4">Welcome</h1>
      <p className="lead">
        Welcome to my portfolio. Check out my{" "}
        <Link to="/home" className="text-decoration-none">
          projects
        </Link>
      </p>
      <p>
        <MDEditor value={value} onChange={handleChange} />
        <MDEditor.Markdown source={value} style={{ whiteSpace: "pre-wrap" }} />
      </p>
    </div>
  );
}

export default Entry;
