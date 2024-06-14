import React from "react";
import Comment from "./Comment";

export default function Post({ username, isAdmin }) {
  return (
    <div>
      {isAdmin && <button>Delete</button>}
      <h2>Example Title</h2>
      <p>Example Content</p>
      <Comment username={username} isAdmin={isAdmin} />
    </div>
  );
}
