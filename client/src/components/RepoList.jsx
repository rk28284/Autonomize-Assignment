import {useEffect,useState } from "react";
import {fetchRepos} from "../../api";

const RepoList = ({ user, setSelectedRepo, setShowFollowers }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
      const getRepos = async () => {
        const data = await fetchRepos(user.username);
        setRepos(data);
      };
      getRepos();
    }, [user.username]);
  return (
    <div>
    <h2>{user.username}'s Repositories</h2>
    <button onClick={() => setShowFollowers(true)}>View Followers</button>
    <ul>
      {repos.map((repo) => (
        <li key={repo.id} onClick={() => setSelectedRepo(repo)}>
          {repo.name}
        </li>
      ))}
    </ul>
  </div>
  )
}
export default RepoList




