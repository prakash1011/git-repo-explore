import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import RepositoryList from "./components/RepositoryList";
const App = () => {
  const [searchParams, setSearchParams] = useState({ query: "react", language: "", sort: "stars" });

  return (
    <div className="headerContainer">
      <h1 className="headerText">GitHub Trending Repositories</h1>
      <SearchBar onSearch={(query, language, sort) => setSearchParams({ query, language, sort })} />
      <RepositoryList {...searchParams} />
    </div>
  );
};

export default App;