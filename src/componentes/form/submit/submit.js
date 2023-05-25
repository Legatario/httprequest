import React from "react";

const SubmitButton = ({ onSubmit }) =>{
    const handleSubmit = (event) => {
        event.preventDefault()

        onSubmit();
    }
    return(
        <div>
            <button onClick={handleSubmit}>Buscar</button>
        </div>
    )
}

export default SubmitButton