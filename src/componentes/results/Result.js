import React from "react";
import MarcsResult from "./marcsResult/MarcsResult";
import ModelResult from "./modelResult/ModelResult";

const Result = ({data, onType}) =>{
    console.log(onType)
    return(
        <div>
            {onType === 'marcs' && <MarcsResult data={data} />}
            {onType === 'model' && <ModelResult data={data}/>}
        </div>
    )
}

export default Result