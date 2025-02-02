import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("");
  const [sort, setSort] = useState("stars");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query, language, sort);
  };

  return (
    <form onSubmit={handleSubmit} className="formSubmit">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search repositories"
        className="searchInput"
      />
      <input
        type="text"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        placeholder="Language"
        className="searchInput"
      />
      <select value={sort} onChange={(e) => setSort(e.target.value)} className="searchInput">
        <option value="stars">sort by - Most Stars</option>
        <option value="forks">sort by - Most Forks</option>
      </select>
      <button type="submit" className="submitButton">Search</button>
    </form>
  );
};

export default SearchBar;