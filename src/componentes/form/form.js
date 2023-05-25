import React, { useState } from "react";
import VehicleTypeField from "./vehicle/VehicleTypeField";
import SubmitButton from "./submit/submit";
import YearField from "./year/YearFiels";
import ModelField from "./mode/ModelField";
import PriceField from "./price/Price";
import Message from "./message/Message";
import Result from "../results/Result";
import './Form.css'

const Form = () =>{
    const [vehicleType, setVehicleType] = useState('carros');
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [price, setPrice] = useState('');
    const [results, setResults] = useState('');
    const [error, setError] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('')


    const handleSubmit = () => {
        setResults(null)
        setMessage('')
        let newMessage = ''
        let newError = ''
        let newType = ''
        const vehicles = {
            type: vehicleType,
            model,
            year,
            price
        }

        if(vehicles){
            newMessage = 'escolha um codigo e digite no campo Modelo'
            let url = `https://parallelum.com.br/fipe/api/v1/${vehicles.type}/marcas`
            newType = 'marcs'
            if(vehicles.model){
                newType = 'model'
                url = url+`/${vehicles.model}/modelos`
                newMessage = 'escolha um codigo e digite no campo do Ano'
                if(vehicles.year){
                    url = url+`/${vehicles.year}/anos`
                    newType = 'marcs'
                    newMessage = 'escolha um codigo e digite no campo ID'
                    if(vehicles.price){
                        url = url+`/${price}`
                        newType = 'price'
                        newMessage = ''
                    }
                }
            }
            setMessage(newMessage)
            if(vehicles.price && !vehicles.year){
                newError ='O campo ano não pode estar vazio'
                setMessage('')
            }
            if(vehicles.year && !vehicles.model){
                newError = 'o campo modelo não pode estar vazio'
                setMessage('')
            }
            setError(newError)
            setType(newType)
            if(!newError){
                fetch(url)
                .then((res) => res.json())
                .then((data)=>{
                    // setResults(data)
                    // console.log(data)
                    if (data.error) {
                        setError("Não foram encontrados dados para esta consulta");
                        setMessage('')
                      } else {
                        setResults(data);
                        console.log(data);
                      }
                })
            }

        }
    }

    return(
        <div>
            <form>
                <VehicleTypeField value={vehicleType} onChange={setVehicleType} />
                <ModelField value={model} onChange={setModel} />
                <YearField value={year} onChange={setYear} />
                <PriceField value={price} onChange={setPrice}/>
                <SubmitButton onSubmit={handleSubmit} />
                <Message onMsg={error} />
                {message && <Message onMsg={message} />}
            </form>

            {results !== null && <Result data={results}  onType={type}/>}
        </div>
    )

}

export default Form