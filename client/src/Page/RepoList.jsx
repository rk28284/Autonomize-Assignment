import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/RepoList1.css";

const RepoList = ({ user, repos }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="profile-container">
        <img src={user.avatar_url} alt={user.name} className="profile-avatar" />
        <div className="profile-details">
          <h2 className="profile-username">{user.login}</h2>
          <p className="profile-bio">{user.bio || "No Bio Availbale Of User"}</p>
          <div className="profile-buttons">
            <button onClick={() => navigate(`/followers/${user.login}`)} className="btn btn-primary">
              View Followers
            </button>
            <button onClick={() => navigate("/")} className="btn btn-secondary">
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <ul className="repository-list">
  
        {repos.map((repo) => (
  <li key={repo.name} className="repository-item">
    <div className="repository-content">
      <img
        src={repo.owner.avatar_url}
        alt={`Avatar of ${repo.owner.login}`}
        className="repository-avatar"
      />
      <Link
        to={`/repo/${repo.owner.login}/${repo.name}`}
        className="repository-link"
      >
        <div className="repository-details">
          <h3 className="repository-name">{repo.name}</h3>
          <p className="repository-description">
            {repo.description ? repo.description : "This repository has no description available."}
          </p>
        </div>
      </Link>
    </div>
  </li>
))}
      </ul>
    </div>
  );
};

export default RepoList;
