import React from "react";

function PubText({ owner }) {
  return (
    <div className="d-flex flex-column text-dark ">
      <p className="fw-bold m-0 pub-text none-underline">
        {owner.firstName} {owner.lastName}
      </p>
      <p className="fw-normal m-0 fs-small none-underline">{owner.id}</p>
    </div>
  );
}

export default PubText;
