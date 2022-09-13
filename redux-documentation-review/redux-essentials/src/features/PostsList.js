import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import SinglePost from "./SinglePost";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const [pageId, setPageId] = useState("");

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="posts-list">
      <h4>
        Search by Id:
        <select
          name="Pages"
          id="pg"
          onChange={(e) => setPageId(e.target.value)}
        >
          {posts.map((post) => (
            <option value={post.id}>{post.id}</option>
          ))}
        </select>
      </h4>
      <SinglePost pageId={pageId} />

      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};
