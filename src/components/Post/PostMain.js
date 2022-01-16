import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem/PostItem";
import Masonry from "react-masonry-css";
import Spinner from "../Spinner";
import Error from "../Error";
import { selectPosts, selectStatus } from "../../redux/posts/postsSlice";
import { fetchPost } from "../../redux/posts/postsSlice";
import { useDispatch } from "react-redux";

function PostMain() {
  // const { posts, isLoading, hasError } = useResult();
  const posts = useSelector(selectPosts);
  const status = useSelector(selectStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if(status === "idle") {
    dispatch(fetchPost());
    }
  }, [dispatch,status]);

  const breakpoints = {
    default: 3,
    1400: 2,
    800: 1,
  };

  if (status === "loading") {
    return <Spinner />;
  }
  if (status === "failed") {
    return <Error />;
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
