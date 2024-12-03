import { useState } from 'react';

function SearchComponent({ data }) {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [noDataFound, setNoDataFound] = useState(false); // New state for "No data found" message

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    filterData(value);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (!lowercasedValue) {
      setFilteredData([]);
      setNoDataFound(false); // Reset "No data found" message when input is empty
      return;
    }

    const filtered = data.filter((item) =>
      item.toLowerCase().includes(lowercasedValue)
    );
    
    if (filtered.length === 0) {
      setNoDataFound(true); // Set "No data found" if no matching items
    } else {
      setNoDataFound(false); // Reset the "No data found" message if matches are found
    }

    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        className="form-control"
        id="input1"
        onChange={handleInputChange}
      />
      
      {/* Display filtered data */}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {/* Show "No data found" message if no matching data */}
      {noDataFound && (
        <p style={{ color: 'red', marginTop: '10px' }}>
          No data found. Please check the input!
        </p>
      )}
    </div>
  );
}

export default SearchComponent;
