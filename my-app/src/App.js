import { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri';
import './App.css';
var data = require('./recipes.json')

function App() {

  const [value, setValue] = useState('')

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    console.log("search", searchTerm)
  }

  return (
    <div className="App">
      <div className="search-container">
        <div className='search-inner'>
          <input type="text" value={value} onChange={handleInputChange} />
          <button className="search-btn" onClick={() => onSearch(value)}><RiSearchLine className="search-icon" /></button>
        </div>
        <div className='dropdown'>
          {data.sort().filter((item) => {
            const searchTerm = value.toLowerCase()
            const name = item.Name.toLowerCase()
            return searchTerm && name.startsWith(searchTerm)
          })
            .map((item, i) => {
              return <div className="dropdown-row" key={i} onClick={() => onSearch(item.Name)}>
                {item.Name}
              </div>
            })}
        </div>
      </div>

    </div>
  );
}

export default App;
