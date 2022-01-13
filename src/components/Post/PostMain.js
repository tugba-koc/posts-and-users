import React from "react";
import { useResult } from "../../context/ResultContext";
import PostItem from "./PostItem/PostItem";
import Masonry from "react-masonry-css";

function PostMain() {
  const { posts, isLoading } = useResult();
  if (!isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const breakpoints = {
    default: 3,
    1400: 2,
    800: 1,
  };

  return (
    <div className="d-flex mt-3 mx-auto w-75">
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {posts.map((post) => (
          <div key={post.id}>
            <PostItem post={post} />
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default PostMain;
