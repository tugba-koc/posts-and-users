import React from "react";
import Image from "../Card/Image";
import Tag from "../Card/Tag";
import Text from "../Card/Text";
import Likes from "../Card/Likes";
import PublishedDate from "../Card/PublishedDate";
import PubImage from "../Publisher/PubImage";
import PubText from "../Publisher/PubText";

function PostItem({ post }) {
  return (
    <div className="bg-light p-2">
      <div className="d-flex flex-row mb-1 ">
        <PubImage owner={post.owner} />
        <div className="ms-2">
          <PubText owner={post.owner} />
        </div>
      </div>

      <Image post={post} />
      <div className="mt-2">
        <Tag tags={post.tags} />
      </div>

      <Text text={post.text} />
      <div className="d-flex flex-row justify-content-between">
        <Likes likes={post.likes} />
        <PublishedDate publishDate={post.publishDate} />
      </div>
    </div>
  );
}

export default PostItem;
