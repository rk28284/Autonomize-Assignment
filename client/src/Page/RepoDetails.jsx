import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";  
import "../style/RepoDetails.css";

const RepoDetails = () => {
    const { owner, repoName } = useParams();
    const [repo, setRepo] = useState(null);

    const navigate = useNavigate();
  
    useEffect(() => {
        const fetchRepoDetails = async () => {
            try {
                const response = await fetch(
                    `https://api.github.com/repos/${owner}/${repoName}`
                );
                const data = await response.json();
                setRepo(data);
            } catch (error) {
                console.error("Error fetching repository details:", error);
            }
        };
        fetchRepoDetails();
    }, [owner, repoName]);
  
    return (
        <div className="repo-container">
            {repo ? (
                <div className="repo-card">
                    <h1 className="repo-name">{repo.name}</h1>
                    <div className="repo-details">
                        <p className="repo-description">
                            <strong>Description:</strong>{" "}
                            {repo.description || "No description available."}
                        </p>
                        <p>
                            <strong>Language:</strong> {repo.language || "N/A"}
                        </p>
                        <p>
                            <strong>Forks:</strong> {repo.forks_count}
                        </p>
                        <p>
                            <strong>Stars:</strong> {repo.stargazers_count}
                        </p>
                        <p>
                            <strong>Open Issues:</strong> {repo.open_issues_count}
                        </p>
                        <a
                            className="btn repo-link"
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View on GitHub
                        </a>
                    </div>
                </div>
            ) : (
                <p className="loading-message">Loading...</p>
            )}
            <button className="btn back-button" onClick={() => navigate(-1)}>
                Go Back
            </button>
        </div>
    );
}

export default RepoDetails;


