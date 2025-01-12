// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../style/UserSearch.css";
// import { fetchUser } from "../service/api";
// import githubLogo from "../assets/pngegg.png";

// const UserSearch = ({ setUserData, setRepos }) => {
//   const [username, setUsername] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await fetchUser(username);
//       const userResponse = await axios.get(
//         `https://api.github.com/users/${username}`
//       );
//       const reposResponse = await axios.get(userResponse.data.repos_url);

//       setUserData(userResponse.data);
//       setRepos(reposResponse.data);

//       setUsername("");
//       navigate("/repo");
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="user-search-container">
//       <img src=`${githubLogo}` alt="github" />
//       <h1 className="user-search-title">GitHub User Explorer</h1>
//       <form onSubmit={handleSearch} className="user-search-form">
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="user-search-input"
//           required
//         />
//         <button
//           type="submit"
//           className={`user-search-button ${loading ? "loading" : ""}`}
//           disabled={loading}
//         >
//           {loading ? "Finding User..." : "Discover User"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UserSearch;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../style/UserSearch.css";
import { fetchUser } from "../service/api";
import githubLogo from "../assets/pngegg.png";

const UserSearch = ({ setUserData, setRepos }) => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetchUser(username);
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const reposResponse = await axios.get(userResponse.data.repos_url);

      setUserData(userResponse.data);
      setRepos(reposResponse.data);

      setUsername("");
      navigate("/repo");
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="user-search-container">
      <div className="user-search-header">
        <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
        <h1 className="user-search-title">GitHub User Explorer</h1>
      </div>
      <form onSubmit={handleSearch} className="user-search-form">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="user-search-input"
          required
        />
        <button
          type="submit"
          className={`user-search-button ${loading ? "loading" : ""}`}
          disabled={loading}
        >
          {loading ? "Finding User..." : "Discover User"}
        </button>
      </form>
    </div>
  );
};

export default UserSearch;
