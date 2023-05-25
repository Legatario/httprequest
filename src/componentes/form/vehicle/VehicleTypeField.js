import React, { useState } from "react";

const VehicleTypeField = () =>{
    const [ vehicleType , setVehicleType ] = useState('');

    const handleTypeChange = (e) =>{
        setVehicleType(e.target.value)
    }

    return (
        <div>
            <label> Tipo de veículo:</label>
            <select value={vehicleType} onChange={handleTypeChange}>
                <option value={'carros'}>Carros</option>
                <option value={'motos'}>Motos</option>
                <option value={'caminhoes'}>Caminhões</option>
            </select>
        </div>
    );
};

export default VehicleTypeField