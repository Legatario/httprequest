import React from 'react';

const PriceField = ({ value, onChange}) => {
  const handleYearChange = (event) => {
        onChange(event.target.value);
      }

 
  return (
    <div>
      <label>ID:</label>
      <input type="text" value={value} onChange={handleYearChange} />
    </div>
  );
};

export default PriceField;