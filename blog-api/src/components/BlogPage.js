import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { UserInfoContext } from "../context/UserInfoContext";

export default function BlogPage() {
  const userInfo = useContext(UserInfoContext);
  return (
    <div>
      <h1>My Blog</h1>
      <Post username={userInfo.username} isAdmin={userInfo.isAdmin} />
    </div>
  );
}
