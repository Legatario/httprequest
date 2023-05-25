import React from "react";
import MarcsResult from "./marcsResult/MarcsResult";
import ModelResult from "./modelResult/ModelResult";
import YearResult from "./yearResult/YearResult";
import PriceResult from "./priceResult/PriceResult";

const Result = ({data, onType}) =>{
    console.log(onType)
    return(
        <div>
            {onType === 'marcs' && <MarcsResult data={data} />}
            {onType === 'model' && <ModelResult data={data}/>}
            {onType === 'year' && <YearResult data={data} />}
            {onType === 'price' && <PriceResult data={data} />}
        </div>
    )
}

export default Result