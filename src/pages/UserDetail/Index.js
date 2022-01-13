import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Index() {
  const { user_id } = useParams();
  const [userDetail, setUserDetail] = React.useState({});

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

  return <div>hey</div>;
}

export default Index;
