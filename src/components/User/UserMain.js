import React from "react";
import { useResult } from "../../context/ResultContext";
import UserItem from "./UserItem/UserItem";
import Spinner from "../../components/Spinner";
import Error from "../Error";

function UserMain() {
  const { users, isLoading, hasError } = useResult();
  if (!isLoading) {
    return <Spinner />;
  }
  if (hasError) {
    return <Error />;
  }
  return (
    <div className="d-flex row mt-3 mx-auto w-75">
      {users.map((user) => (
        <UserItem user={user} />
      ))}
    </div>
  );
}

export default UserMain;
