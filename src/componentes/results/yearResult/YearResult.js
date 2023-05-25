import React from "react";
import './YearResult'

const YearResult = ({data}) =>{
    return (
        <div>
          <h3>Resultados:</h3>
          {data.map((result, index) => (
            <div key={index} className="pContainer">
              <p>Nome: {result.nome}</p>
              <p>Codigo: {result.codigo}</p>
            </div>
          ))}
        </div>
      );
}

export default YearResult