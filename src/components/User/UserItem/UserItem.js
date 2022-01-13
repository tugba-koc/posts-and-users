import React from "react";
import UserImage from "../Card/UserImage";
import UserText from "../Card/UserText";

function UserItem({ user }) {
  return (
    <div key={user.id} className="bg-light p-2 box col-xxl-2 col-md-4 col-6">
      <UserImage picture={user.picture} />
      <UserText user={user} />
    </div>
  );
}

export default UserItem;
