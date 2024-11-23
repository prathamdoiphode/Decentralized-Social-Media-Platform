import React, { useState } from "react";
import { createPost } from "../utils/blockchain";

function Post() {
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    const response = await createPost(content);
    alert(response);
  };

  return (
    <div>
      <h2>Create Post</h2>
      <textarea
        placeholder="Write your post"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}

export default Post;
