import React from "react";
import heart from "../../../img/heart.png";

function Likes({ likes }) {
  return (
    <>
      <p className="d-flex align-items-center ">
        {" "}
        <img className="me-2" width="15px" src={heart} alt="" /> {likes} likes{" "}
      </p>
    </>
  );
}

export default Likes;
