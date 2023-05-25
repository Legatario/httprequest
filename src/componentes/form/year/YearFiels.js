import React from 'react';

const YearField = ({ value, onChange }) => {
  const handleYearChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>Ano:</label>
      <input type="text" value={value} onChange={handleYearChange} />
    </div>
  );
};

export default YearField;