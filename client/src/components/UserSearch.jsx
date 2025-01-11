import React, { useState } from "react";
import axios from "axios";

const UserSearch = ({ setCurrentUser }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  console.log(userData, "user");
  console.log(repos, "repos");

  const handleSearch = async () => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `https://autonomize-backend-1-1g02.onrender.com/save-user/${username}`
      );

      console.log(response, "res");

      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(userResponse, "user");

      const reposResponse = await axios.get(userResponse.data.repos_url);
      console.log(reposResponse, "input");

      setUserData(userResponse.data);
      setRepos(reposResponse.data);

      setUsername("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default UserSearch;
