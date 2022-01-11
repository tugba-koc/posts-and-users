import React from "react";
import { useResult } from "../../context/ResultContext";
import "./style.css";
import PostItem from "./PostItem/PostItem";

function PostMain() {
  const { posts, isLoading } = useResult();
  if (!isLoading) {
    return (
      <div class="text-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-wrap w-75 mx-auto row mt-3 align-items-start">
      {posts.map((post) => (
        <PostItem post={post} />
      ))}
    </div>
  );
}

export default PostMain;
