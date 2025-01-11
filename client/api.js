const BASE_URL = "https://autonomize-backend-1-1g02.onrender.com/api"; 

// Fetch user data by username
export const fetchUser = async (username) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
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
