import React from "react";

function UserText({ user }) {
  return (
    <>
      <p className="fs-smaller mb-0 mt-3 text-dark">{user.id} </p>
      <p className="fs-small fw-bolder text-dark">{user.title} {user.firstName} {user.lastName} </p>
    </>
  );
}

export default UserText;
