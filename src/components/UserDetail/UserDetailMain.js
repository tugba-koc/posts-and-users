import React, { useEffect } from "react";
import UserImage from "../User/Card/UserImage";
import Id from "./Card/Id";
import FullName from "./Card/FullName";
import Gender from "./Card/Gender";
import RegisterDate from "./Card/RegisterDate";
import UpdatedDate from "./Card/UpdatedDate";
import Birthday from "./Card/Birthday";
import Phone from "./Card/Phone";
import Maps from "./Card/Maps";
import {
  selectUserDetail,
  selectStatus,
} from "../../redux/userDetail/userDetailSlice";
import { fetchUserDetail } from "../../redux/userDetail/userDetailSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner";
import Error from "../Error";

function UserDetailMain({ user_id }) {
  const dispatch = useDispatch();

  const userDetail = useSelector(selectUserDetail);
  const status = useSelector(selectStatus);

  useEffect(() => {
    
    dispatch(fetchUserDetail(user_id));
    
  }, [user_id, dispatch]);

  if (status === "loading") {
    return <Spinner />;
  }
  if (status === "failed") {
    return <Error />;
  }  

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
