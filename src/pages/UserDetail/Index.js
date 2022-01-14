import React from "react";
import { useParams } from "react-router-dom";
import UserDetailMain from "../../components/UserDetail/UserDetailMain";

function Index() {
  const { user_id } = useParams();

  return (
    <>
      <UserDetailMain user_id={user_id} />
    </>
  );
}

export default Index;
