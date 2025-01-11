import React from 'react'

const RepoDetails = ({ repo, setSelectedRepo }) => {
  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description || "No description available."}</p>
      <button onClick={() => setSelectedRepo(null)}>Back</button>
    </div>  )
}

export default RepoDetails