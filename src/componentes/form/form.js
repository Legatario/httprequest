import React, { useState } from "react";
import VehicleTypeField from "./vehicle/VehicleTypeField";
import SubmitButton from "./submit/submit";
import YearField from "./year/YearFiels";
import ModelField from "./mode/ModelField";
import PriceField from "./price/Price";

const Form = () =>{
    const [vehicleType, setVehicleType] = useState('carros');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    // const [results, setResults] = useState('');
    // const [error, setError] = useState('');

    const handleSubmit = () => {
        const vehicles = {
            type: vehicleType,
            model,
            year,
            price
        }

        if(vehicles){
            console.log(vehicles)
            let url = `https://parallelum.com.br/fipe/api/v1/${vehicles.type}/marcas`
            if(vehicles.model){
                url = url+`/${vehicles.model}/modelos`
                console.log(url)
                if(vehicles.year){
                    url = url+`/${vehicles.year}/anos`
                    console.log(url)
                    if(vehicles.valia){
                        url = url+`/2014-3`
                        console.log(url)
                    }
                }
            }
            fetch(url)
            .then((res) => res.json())
            .then((data)=>{
                console.log(data)
            })

        }
    }

    return(
        <div>
            <form>
                <VehicleTypeField value={vehicleType} onChange={setVehicleType} />
                {/* <MarcsField value={marcs} onChange={setMarcs} /> */}
                <ModelField value={model} onChange={setModel} />
                <YearField value={year} onChange={setYear} />
                <PriceField value={price} onChange={setPrice} />
                <SubmitButton onSubmit={handleSubmit} />
            </form>
        </div>
    )

}

export default Form