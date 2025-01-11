import './App.css'
import React, { useState } from "react";
import UserSearch from "./components/UserSearch";
import RepoList from "./components/RepoList";
import RepoDetails from "./components/RepoDetails";
import FollowerList from "./components/FollowerList";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [showFollowers, setShowFollowers] = useState(false);
 

  return (
    <>
  <div style={{ padding: "20px" }}>
      {!currentUser ? (
        <UserSearch setCurrentUser={setCurrentUser} />
      ) : showFollowers ? (
        <FollowerList username={currentUser.username} setShowFollowers={setShowFollowers} />
      ) : selectedRepo ? (
        <RepoDetails repo={selectedRepo} setSelectedRepo={setSelectedRepo} />
      ) : (
        <RepoList
          user={currentUser}
          setSelectedRepo={setSelectedRepo}
          setShowFollowers={setShowFollowers}
        />
      )}
    </div>
  
      
    
    </>
  )
}

export default App
