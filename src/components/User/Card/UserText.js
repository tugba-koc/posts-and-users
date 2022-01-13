import React from "react";

function UserText({ user }) {
  return (
    <>
      <p className="fs-smaller mb-0 mt-3">{user.id} </p>
      <p className="fs-small fw-bolder">{user.title} {user.firstName} {user.lastName} </p>
    </>
  );
}

export default UserText;
