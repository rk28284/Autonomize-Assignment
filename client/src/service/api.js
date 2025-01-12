const BASE_URL = "https://autonomize-backend-1-1g02.onrender.com/api/users"; 

// Fetch user data by username
export const fetchUser = async (username) => {
  const response = await fetch(`${BASE_URL}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  });
  return response.json();
};

export const fetchUserDetails = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`,{
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
// Fetch user's repositories
export const fetchRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  return response.json();
};

// Fetch user's followers
export const fetchFollowers = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/followers`);
  return response.json();
};
