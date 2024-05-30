import React, { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState();
  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("user searched for: ", searchTerm);
  };
  return (
    <div className="Search">
      <label htmlFor="search">Search Term </label>
      <input
        type="text"
        name="search"
        id="search"
        onChange={handleSearchTermChange}
      />
    </div>
  );
}

export default Search;
