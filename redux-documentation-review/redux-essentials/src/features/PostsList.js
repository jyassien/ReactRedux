import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SinglePost from "./SinglePost";
import { postUpdated } from "./postsSlice";
import { nanoid } from "@reduxjs/toolkit";

export const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const [pageId, setPageId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onUpdatePostClicked = () => {
    if (title && content) {
      dispatch(postUpdated({ id: nanoid(), title, content }));
      console.log("object");
      setTitle("");
      setContent("");
    }
  };

  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <input
        type="text"
        placeholder="Title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Content..."
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={onUpdatePostClicked}>Update</button>
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
