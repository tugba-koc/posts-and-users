import React from "react";

function PubText({ owner }) {
  return (
    <div className="d-flex flex-column">
      <p className="fw-bold  m-0 pub-text">
        {owner.firstName} {owner.lastName}
      </p>
      <p className="fw-normal m-0 fs-small">{owner.id}</p>
    </div>
  );
}

export default PubText;
