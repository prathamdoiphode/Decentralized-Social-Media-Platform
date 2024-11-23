import React, { useState, useEffect } from "react";
import { getAllPosts } from "../utils/blockchain";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const allPosts = await getAllPosts();
      setPosts(allPosts);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>User Feed</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <p>{post.content}</p>
          <p>By: {post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Feed;
