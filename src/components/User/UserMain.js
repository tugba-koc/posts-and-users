import React from "react";
import { useResult } from "../../context/ResultContext";
import UserItem from "./UserItem/UserItem";
import Spinner from "../../components/Spinner";

function UserMain() {
  const { users, isLoading } = useResult();
  if (!isLoading) {
    return <Spinner />;
  }
  return (
    <div className="d-flex row mt-3 mx-auto w-75 vh-100">
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
}

export default UserMain;
