import React, { useState, useEffect } from "react";
import { fetchRepositories } from "../api/GitApi";


const RepositoryList = ({ query, language, sort }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const data = await fetchRepositories(query, language, sort);
      setRepos(data);
    };
    getRepos();
  }, [query, language, sort]);

  return (
    <div className="repoContainer">
      {repos.length === 0 ? (
        <p>No repositories found</p>
      ) : (
        repos.map((repo) => (
          <div key={repo.id} className="repoData">
            <h2 className="repoName">{repo.name}</h2>
            <p className="repoDescription">{repo.description}</p>
            <p className="starCount">STAR: {repo.stargazers_count} </p>
            <p classNAme="forkCount"> FORK:  {repo.forks_count}</p>
            <p className="languageData">LANGUAGE: {repo.language || "Not specified"}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RepositoryList;