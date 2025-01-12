import "./App.css";
import React, { useState } from "react";
import RepoDetails from "./Page/RepoDetails";
import { Routes, Route, useLocation } from "react-router-dom";
import FollowerList from "./Page/FollowerList";
import RepoList from "./Page/RepoList";
import UserSearch from "./components/UserSearch";
import FollowerRepositories from "./Page/FollowerRepositories";

function App() {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const location = useLocation();

  return (
    <>
      <div className="app">
        {location.pathname === "/" && (
          <UserSearch setUserData={setUserData} setRepos={setRepos} />
        )}

        <Routes>
          {userData && (
            <>
              <Route
                path="/repo"
                element={<RepoList user={userData} repos={repos} />}
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
