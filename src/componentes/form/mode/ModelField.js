import React from 'react';

const ModelField = ({ value, onChange }) => {
  const handleModelChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>Modelo:</label>
      <input type="text" value={value} onChange={handleModelChange} />
    </div>
  );
};

export default ModelField;