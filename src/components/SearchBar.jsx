import { useState } from "react";
import '../css/SearchBar.css'
import icon from '../images/iconSearch.png'


export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = () => {
    onSearch(searchTerm);
    setSearchTerm('')
  }

  return (
    <div>
      <input
        className="search-input"
        type="text"
        placeholder="Search for Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        <img src={icon} className="button-icon" />
      </button>
    </div>
  )
}