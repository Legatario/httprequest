import React from "react";
import './ModelResult.css'

const ModeloResult = ({data}) =>{
    return (
        <div className="cards">
            <div>
          <h3>Resultados por anos:</h3>
          {data.modelos.map((result, index) => (
            <div key={index} className="pContainer">
              <p>Nome: {result.nome}</p>
              <p>Codigo: {result.codigo}</p>
            </div>
          ))}
            </div>
            {/* //esta parte do codigo poderia dar uma informação errada ao usuario optei em deixar sem */}
            {/* <div>
            <h3>Resultados por modelos:</h3>
          {data.anos.map((result, index) => (
            <div key={index} className="pContainer">
              <p>Nome: {result.nome}</p>
              <p>Codigo: {result.codigo}</p>
            </div>
          ))}
            </div> */}
        </div>
      );
}

export default ModeloResult