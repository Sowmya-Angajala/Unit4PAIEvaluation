import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username);
      setUsername("");
    }
  };
  return (
    
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Enter Github Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Search </button>
      </form>
 
  );
};
export default SearchBar;
