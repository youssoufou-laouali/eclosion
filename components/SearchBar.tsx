import React, { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [check, setCheck] = useState(false);

  const handleSearch = (value: boolean) => {
    setCheck(value);
  };
  return (
    <div className="box">
      <input
        type="checkbox"
        checked={check}
        onChange={(e) => handleSearch(e.target.checked)}
        id="check"
      />
      <div className="search-box">
        <input
          type="text"
          placeholder="Recherche ..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className=""
        />
        <label htmlFor="check" className="icon">
          <SearchIcon className="inline-block h-6 cursor-pointer" />
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
