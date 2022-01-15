import React from "react";

function UpdatedDate({updatedDate}) {
  let date = new Date(updatedDate);
  return (
    <>
      <p className="fs-small">
        {" "}
        <span className="fs-small fw-bolder">Updated Date :</span>{" "}
        {date.toString().slice(4, 21)}{" "}
      </p>
    </>
  );
}

export default UpdatedDate;
