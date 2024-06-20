import React, { useState, useEffect } from "react";
import { createPost, updatePost } from "../services/postService";

export default function PostForm(posts, setPosts, editing, setEditing) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setBody(editing.body);
    }
  }, [editing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body };
    setTitle("");
    setBody("");

    if (editing) {
      updatePost(editing.id, post)
        .then((response) => {
          setPosts(
            posts.map((post) => (post.id === editing.id ? response.data : post))
          );
        })
        .catch((e) => {
          console.error(e);
        });
      setEditing(null);
      return;
    }
    createPost(post)
      .then((response) => {
        setPosts([...posts, response.data]);
      })
      .catch((e) => {
        console.error(e);
      });
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
        <button type="submit">{editing ? "Edit Post" : "Add Post"}</button>
      </form>
    </div>
  );
}
