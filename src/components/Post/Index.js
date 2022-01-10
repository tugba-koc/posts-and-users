import React from "react";
import { useResult } from "../../context/ResultContext";
import Image from "./Card/Image";
import Tag from "./Card/Tag";
import Text from "./Card/Text";
import Likes from "./Card/Likes";
import PubImage from "./Publisher/PubImage";
import PubText from "./Publisher/PubText";
import "./style.css";

function Index() {
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
    <div>
      {posts.map((post) => (
        <div key={post.id} className="d-flex flex-column">
          <div className="d-flex flex-row">
            <PubImage owner={post.owner} />
            <PubText owner={post.owner} />
          </div>

          <Image post={post} />
          <Tag tags={post.tags} />
          <Text text={post.text} />
          <Likes likes={post.likes} />
        </div>
      ))}
    </div>
  );
}

export default Index;
