import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { FaCaretDown } from 'react-icons/fa';
import './App.css';
import recipes from './recipes.json';

function App() {
  const [value, setValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    setShowDropdown(true); // Show dropdown when input changes
  };

  const onSearch = (searchTerm, url) => {
    setValue(searchTerm);
    setShowDropdown(false); // Hide dropdown when item is selected
    console.log('search', searchTerm);
    // Redirect the user to the URL associated with the selected recipe
    window.location.href = url;
  };

  return (
    <div className="App">
      <div className="search-container">
        <div className="search-inner">
          <button className='All-icon'>
            All <FaCaretDown />
          </button>
          <input type="text" value={value} onChange={handleInputChange} />
          <RiSearchLine className="search-icon" />
        </div>
        {showDropdown && (
          <div className="dropdown">
            {recipes
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const name = item.Name.toLowerCase();
                return searchTerm && name.includes(searchTerm);
              })
              .slice(0, 10)
              .map((item, index) => (
                <div className="dropdown-row" key={index} onClick={() => onSearch(item.Name, item.url)}>
                  {item.Name}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
