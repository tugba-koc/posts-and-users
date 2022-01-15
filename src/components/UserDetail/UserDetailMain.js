import React, { useState, useEffect } from "react";
import axios from "axios";
import UserImage from "../User/Card/UserImage";
import Id from "./Card/Id";
import FullName from "./Card/FullName";
import Gender from "./Card/Gender";
import RegisterDate from "./Card/RegisterDate";
import UpdatedDate from "./Card/UpdatedDate";
import Birthday from "./Card/Birthday";
import Phone from "./Card/Phone";
import Maps from "./Card/Maps";

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
      <div className="col-lg-4 col-6">
        <UserImage picture={userDetail.picture} />
      </div>
      <div className="col-lg-3 col-6">
        <Id id={userDetail.id} />
        <FullName userDetail={userDetail} />
        <Gender gender={userDetail.gender} />
        <RegisterDate registerDate={userDetail.registerDate} />
        <UpdatedDate updatedDate={userDetail.updatedDate} />
        <Birthday dateOfBirth={userDetail.dateOfBirth} />
        <Phone phone={userDetail.phone} />
      </div>

      {userDetail.location && (
        <div className="col-lg-5 col-12 mt-5 mt-lg-0">
          <Maps location={userDetail.location} />
        </div>
      )}
    </div>
  );
}

export default UserDetailMain;
