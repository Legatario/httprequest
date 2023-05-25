import React from "react";

const VehicleTypeField = ({ value, onChange }) =>{

    const handleTypeChange = (e) =>{
        onChange(e.target.value)
    }

    return (
        <div>
            <label> Tipo de veículo:</label>
            <select value={value} onChange={handleTypeChange}>
                <option value={'carros'}>Carros</option>
                <option value={'motos'}>Motos</option>
                <option value={'caminhoes'}>Caminhões</option>
            </select>
        </div>
    );
};

export default VehicleTypeField