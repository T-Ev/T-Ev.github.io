import React from "react";
import { Link } from "react-router-dom";

const Entry: React.FC = () => {
  return (
    <div className="text-center py-5">
      <h1 className="display-4 mb-4">Welcome</h1>
      <p className="lead">
        Welcome to my portfolio. Check out my{" "}
        <Link to="/home" className="text-decoration-none">
          projects
        </Link>
        !
      </p>
    </div>
  );
};

export default Entry;
