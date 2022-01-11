import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Posts from "../../pages/Posts/Index";
import Users from "../../pages/Users/Index";

function Index() {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-light">
          <nav className="d-flex flex-row justify-content-between w-75 mx-auto pt-3">
            <p>
              <Link className="text-dark fw-bolder" to="/">
                DUMMYAPI.IO
              </Link>
            </p>
            <p>
              <Link className="text-dark fw-bolder" to="users">
                Users
              </Link>
            </p>
          </nav>
        </div>
        <Routes>
          <Route exact path="/" element={<Posts />}></Route>
          <Route path="users" element={<Users />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default React.memo(Index);
