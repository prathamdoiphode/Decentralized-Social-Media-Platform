import React, { useState } from "react";
import { createUserProfile } from "../utils/blockchain";

function Profile() {
  const [username, setUsername] = useState("");

  const handleSubmit = async () => {
    const response = await createUserProfile(username);
    alert(response);
  };

  return (
    <div>
      <h2>Create Profile</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit}>Create Profile</button>
    </div>
  );
}

export default Profile;
