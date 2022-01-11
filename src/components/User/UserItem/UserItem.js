import React from "react";

function UserItem({ user }) {
  return (
    <div key={user.id} className="bg-light col-4 p-2">
      <UserImage user={user} />
      <UserEmail email={user.email} />
      <UserDate publishDate={user.publishDate} />
    </div>
  );
}

export default UserItem;
