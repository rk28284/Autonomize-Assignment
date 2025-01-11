import React, { useEffect, useState } from "react";
import { fetchFollowers } from "../../api";

const FollowerList = ({ username, setShowFollowers }) => {
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
      const getFollowers = async () => {
        const data = await fetchFollowers(username);
        setFollowers(data);
      };
      getFollowers();
    }, [username]);
  return (
    <div>
    <h2>{username}'s Followers</h2>
    <ul>
      {followers.map((follower) => (
        <li key={follower.id}>{follower.login}</li>
      ))}
    </ul>
    <button onClick={() => setShowFollowers(false)}>Back</button>
  </div>  )
}

export default FollowerList