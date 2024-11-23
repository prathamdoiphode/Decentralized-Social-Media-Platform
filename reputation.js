import React, { useState, useEffect } from "react";
import { getReputation, increaseReputation } from "../utils/blockchain";

function Reputation({ userAddress }) {
  const [reputation, setReputation] = useState(0);

  useEffect(() => {
    async function fetchReputation() {
      const rep = await getReputation(userAddress);
      setReputation(rep);
    }
    fetchReputation();
  }, [userAddress]);

  const handleIncreaseReputation = async () => {
    await increaseReputation(userAddress, 10); // Increase by 10 points
    const newReputation = await getReputation(userAddress);
    setReputation(newReputation);
  };

  return (
    <div>
      <h3>Reputation: {reputation}</h3>
      <button onClick={handleIncreaseReputation}>Increase Reputation</button>
    </div>
  );
}

export default Reputation;
