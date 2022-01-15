import React from "react";
import { useResult } from "../../context/ResultContext";
import PostItem from "./PostItem/PostItem";
import Masonry from "react-masonry-css";
import Spinner from "../Spinner";
import Error from "../Error";

function PostMain() {
  const { posts, isLoading, hasError } = useResult();

  const breakpoints = {
    default: 3,
    1400: 2,
    800: 1,
  };

  if (!isLoading) {
    return <Spinner />;
  }
  if(hasError){
    return <Error />
  }

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
