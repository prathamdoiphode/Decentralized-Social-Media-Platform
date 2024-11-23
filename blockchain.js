import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

const contractAddress = "YOUR_SMART_CONTRACT_ADDRESS";
const abi = [
  // Add your smart contract's ABI here
];

const contract = new ethers.Contract(contractAddress, abi, signer);

export async function createUserProfile(username) {
  const tx = await contract.createUserProfile(username);
  await tx.wait();
}

export async function createPost(content) {
  const tx = await contract.createPost(content);
  await tx.wait();
}

export async function getAllPosts() {
  return await contract.getAllPosts();
}

export async function getReputation(user) {
  return await contract.getReputation(user);
}

export async function increaseReputation(user, points) {
  const tx = await contract.increaseReputation(user, points);
  await tx.wait();
}
