import React from "react";

function Phone({ phone }) {
  return (
    <>
      <p className="fs-small">
        {" "}
        <span className="fs-small fw-bolder">Phone :</span> {phone}{" "}
      </p>
    </>
  );
}

export default Phone;
