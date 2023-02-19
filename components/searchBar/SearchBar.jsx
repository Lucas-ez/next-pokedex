'use client'
import './searchBar.css'

function SearchBar({searchInput, setSearchInput}) {
  return (
    <div className='SearchBar'>
      <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
    </div>
  )
}

export default SearchBar