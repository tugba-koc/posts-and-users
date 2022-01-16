import React from "react";

function Spinner() {
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
