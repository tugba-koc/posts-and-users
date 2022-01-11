import React from "react";
import { useResult } from "../../context/ResultContext";

function UserMain() {
  const { users, isLoading } = useResult();
  return (
    <div className="d-flex row mt-3 mx-auto w-75">
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
}

export default UserMain;