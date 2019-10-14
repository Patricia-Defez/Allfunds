import React, { useState } from 'react';

const NUMBER_PATTERN = /^\d*$/;

const validations = {
    data: (value) => {
        let message;
        if(!NUMBER_PATTERN.test(value)) message = 'Por favor, introduzca un número válido'
        return message;
    }

}
 const Form = () => {
     
    const [transportation, setTransportation] = useState("");
    const [meal, setMeal] = useState(0);
    const [parking, setParking] = useState("");


     return (
        <div className="row mx-auto ">
            <div className="col-xs-12 col-sm-10 mx-auto mt-5">
                <div className = "input-group  col-sm-6 mb-3">
                    <label for="transportation" className="col-sm-4">Desplazamientos</label>       
                    <input type="text"  className="form-control" name="transportation" onChange={e => setTransportation(e.target.value)} value={transportation}/>
                    <div className="input-group-append">
                        <span className="input-group-text">Kms</span>
                    </div>
                   <span className="ml-3">A pagar:</span>
                </div>
                <div className="input-group col-sm-6 mb-3">
                    <label for="meal" className="col-sm-4 col-form-label">Nº de comidas</label>
                    <input type="number" className="form-control" name="meal" onChange={e => setMeal(e.target.value)} value={meal}/> 
                    <span className="ml-3">A pagar: {meal*2}</span>
                </div>
                <div className="input-group col-sm-6 mb-3">
                    <label for="parking" className="col-sm-4">Parking</label>       
                    <input type="text"  className="form-control" name="parking" onChange={e => setParking(e.target.value)} value={parking}/>
                    <div className="input-group-append">
                        <span className="input-group-text">$</span>
                    </div>
                    <span className="ml-3">A pagar:</span>
                </div>
             </div>
        </div>
     );
 };
 export default Form;
