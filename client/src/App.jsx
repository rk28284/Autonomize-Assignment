import "./App.css";
import React, { useState } from "react";
import RepoDetails from "./Page/RepoDetails";
import { Routes, Route, useLocation } from "react-router-dom";
import FollowerList from "./Page/FollowerList";
import RepoList from "./Page/RepoList";
import UserSearch from "./components/UserSearch";
import FollowerRepositories from "./Page/FollowerRepositories";

function App() {
  const [currentUser , setCurrentUser ] = useState(null);
  const [repositoryList, setRepositoryList] = useState([]);
  const location = useLocation();

  return (
    <>
      <div className="app">
        {location.pathname === "/" && (
          <UserSearch setUserData={setCurrentUser} setRepos={setRepositoryList} />
        )}

        <Routes>
          {currentUser && (
            <>
              <Route
                path="/repo"
                element={<RepoList user={currentUser} repos={repositoryList} />}
              />
              <Route path="/repo/:owner/:repoName" element={<RepoDetails />} />
              <Route
                path="/followers/:name"
                element={<FollowerList followersUrl={userData.followers_url} />}
              />
             <Route
              path="/follower-repository/:followerLogin"
              element={<FollowerRepositories/>}/>
            </>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
