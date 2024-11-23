import React from "react";
import Profile from "./components/Profile";
import Post from "./components/Post";
import PostWithMedia from "./components/PostWithMedia";
import Feed from "./components/Feed";
import Reputation from "./components/Reputation";

function App() {
  const userAddress = "0xYourUserAddress"; 

  return (
    <div>
      <h1>Decentralized Social Media</h1>
      <Profile />
      <Post />
      <PostWithMedia />
      <Feed />
      <Reputation userAddress={userAddress} />
    </div>
  );
}

export default App;
