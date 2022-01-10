import React from "react";

function PubImage({ owner }) {
  return (
    <>
      <img className="rounded-circle pub-image" src={owner.picture} alt="" />
    </>
  );
}

export default PubImage;
