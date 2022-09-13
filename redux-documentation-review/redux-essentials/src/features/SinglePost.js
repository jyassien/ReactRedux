import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function SinglePost({ pageId }) {
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === pageId)
  );

  return (
    <div className="post-excerpt">
      <h3>{post && post.title}</h3>
      <p className="post-content">{post && post.content}</p>
    </div>
  );
}
