import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../style/FollowerRepositories.css";
const FollowerRepositories = () => {
  const { followerLogin } = useParams();
  const [repositories, setRepositories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFollowerRepositories = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${followerLogin}/repos`
        );
        const data = await response.json();
        setRepositories(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchFollowerRepositories();
  }, [followerLogin]);

  return (
    <div className="follower-repositories-container">
      <button
        onClick={() => navigate(`/followers/${followerLogin}`)}
        className="back-to-followers-button"
      >
        Back to Followers List
      </button>

      <h2 className="repositories-title">
        Repositories of <span className="follower-name">{followerLogin}</span>
      </h2>

      <ul className="repositories-list">
        {repositories.map((repository) => (
          <li key={repository.id} className="repository-card">
            <h3 className="repository-name">{repository.name}</h3>
            <p className="repository-description">
              {repository.description || "No description available."}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowerRepositories;
