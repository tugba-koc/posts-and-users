import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import UserItem from "./UserItem/UserItem";
import Spinner from "../../components/Spinner";
import Error from "../Error";
import { selectUsers, selectStatus } from "../../redux/users/usersSlice";
import { fetchUser } from "../../redux/users/usersSlice";
import { useDispatch } from "react-redux";

function UserMain() {
  const users = useSelector(selectUsers);
  const status = useSelector(selectStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if(status === "idle") {
    dispatch(fetchUser());
    }
  }, [dispatch,status]);

  if (status === "loading") {
    return <Spinner />;
  }
  if (status === "failed") {
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
