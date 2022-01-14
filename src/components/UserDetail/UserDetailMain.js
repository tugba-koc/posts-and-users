import React, { useState, useEffect } from "react";
import axios from "axios";
import UserImage from "../User/Card/UserImage";

function UserDetailMain({ user_id }) {
  const [userDetail, setUserDetail] = useState({});

  useEffect(() => {
    const fetchUserDetail = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_POINT}/user/${user_id}`,
        { headers: { "app-id": "61db222fb4e3dc5a1d5e85c0" } }
      );
      setUserDetail(res.data);
    };
    fetchUserDetail();
  }, [user_id]);

  return (
    <div className="d-flex row mt-3 mx-auto w-75">
        <div className="col-3"><UserImage picture={userDetail.picture} /></div>
      <div>
        
      </div>
    </div>
  );
}

export default UserDetailMain;
