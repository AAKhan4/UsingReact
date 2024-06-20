import React, { useState, useEffect } from "react";
import { getPosts, deletePost } from "../services/postService";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  const handleDelete = (id) => {
    deletePost(id)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
