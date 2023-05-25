import React from "react";
import './PriceResult.css'

const MarcsResult = ({data}) =>{
    return (
        <div className="PriceResult">
          <h3>Resultado:</h3>
          <div>
          <p>Ano Modelo: {data.AnoModelo}</p>
          <p>Codigo Fipe: {data.CodigoFipe}</p>
          <p>Combustivel: {data.Combustivel}</p>
          <p>Marca: {data.Marca}</p>
          <p>Mês de Referência: {data.MesReferencia}</p>
          <p>Modelo: {data.Modelo}</p>
          <p>Sigla do Combustivel: {data.SiglaCombustivel}</p> 
          <p>Tipo do Veículo: {data.TipoVeiculo}</p>
          <p>Valor: {data.Valor}</p>
          </div>
        </div>
      );
}

export default MarcsResult