import React, { useState } from "react";
import { uploadToIPFS } from "../utils/ipfs";

function PostWithMedia() {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");

  const handleFileUpload = async () => {
    if (file) {
      const url = await uploadToIPFS(file);
      setFileUrl(url);
      alert(`File uploaded to IPFS: ${url}`);
    }
  };

  return (
    <div>
      <h2>Create Post with Media</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleFileUpload}>Upload to IPFS</button>
      {fileUrl && <p>File URL: {fileUrl}</p>}
    </div>
  );
}

export default PostWithMedia;
