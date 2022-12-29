import React from "react";

function Navbar(props) {
  return (
    <div className="">
      <nav className=" navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="index.html">
            CRUD Full Stack Application
          </a>
          <button className="btn btn-secondary">{props.name}</button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
