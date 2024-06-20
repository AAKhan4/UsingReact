import React, { useState } from "react";
import { createPost } from "../services/postService";

export default function PostForm(posts, setPosts) {
  const { title, setTitle } = useState("");
  const { body, setBody } = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost({ title, body })
      .then((response) => {
        setPosts([...posts, response.data]);
      })
      .catch((e) => {
        console.error(e);
      });

    setTitle("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <div>Title</div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>Body</div>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}
