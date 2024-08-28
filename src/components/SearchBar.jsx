import { useState } from "react";
import '../css/SearchBar.css'
import icon from '../images/iconsearch.png'
import { useNavigate } from "react-router-dom";


export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/pokemon/${searchTerm.toLowerCase()}`)
      setSearchTerm('')
    }
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
        <img src={icon} className="button-icon" alt="search-icon" />
      </button>
    </div>
  )
}