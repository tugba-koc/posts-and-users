import React from "react";
import UserImage from "../Card/UserImage";
import UserText from "../Card/UserText";
import { Link } from "react-router-dom";

function UserItem({ user }) {
  return (
    <Link
      key={user.id}
      className="bg-light p-2 box col-xxl-2 col-md-4 col-6"
      to={`/user/${user.id}`}
    >
      <UserImage picture={user.picture} />
      <UserText user={user} />
    </Link>
  );
}

export default UserItem;
