import { useState } from "react";
import "../css/SearchBar.css";
import icon from "../images/iconsearch.png";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/pokemon/${searchTerm.toLowerCase()}`);
      setSearchTerm("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchbar-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search for Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="search-button"
        onClick={handleSearch}
        aria-label="Search"
      >
        <img src={icon} className="button-icon" alt="search-icon" />
      </button>
    </div>
  );
}
