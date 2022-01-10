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
    <div key={post.id} className="col-md-4">
      <div className="d-flex flex-row">
        <PubImage owner={post.owner} />
        <PubText owner={post.owner} />
      </div>

      <Image post={post} />
      <Tag tags={post.tags} />
      <Text text={post.text} />
      <div className="d-flex flex-row justify-content-between">
        <Likes likes={post.likes} />
        <PublishedDate publishDate={post.publishDate} />
      </div>
    </div>
  );
}

export default PostItem;
