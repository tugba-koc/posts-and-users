import React from "react";

function FullName({ userDetail }) {
  return (
    <>
      <p className="fs-6 fw-bold">
        {" "}
        {userDetail.title} {userDetail.firstName} {userDetail.lastName}{" "}
      </p>
    </>
  );
}

export default FullName;
