import React, { useState } from 'react';




const Form = () => {

    const [transportation, setTransportation] = useState("");
    const [meal, setMeal] = useState(0);
    const [parking, setParking] = useState("");
    

  

    return (
        <div className="row mx-auto ">
            <div className="col-xs-12 col-sm-10 mx-auto mt-5">
                <div className="input-group  col-sm-6 mb-3">
                    <label for="transportation" className="col-sm-4">Desplazamientos</label>
                    <input type="text" className={`form-control ${isNaN(transportation) ? 'text-danger is-invalid': ''}`} name="transportation"
                        value={transportation}
                        onChange={e => setTransportation(e.target.value)}
                     />
                    <div className="input-group-append">
                        <span className="input-group-text">Kms</span>
                    </div>
                    <span className="ml-3">A pagar:</span>
                </div>
                {isNaN(transportation) && (
                    <p className="text-danger">Por favor, introduzca un número válido</p>
                )}
                
                <div className="input-group col-sm-6 mb-3">
                    <label for="meal" className="col-sm-4 col-form-label">Nº de comidas</label>
                    <input type="text" className={`form-control ${isNaN(meal) ? 'text-danger is-invalid': ''}`} name="meal" onChange={e => setMeal(e.target.value)} value={meal} />
                    <span className="ml-3">A pagar: {meal * 2}</span>
                </div>
                {isNaN(meal) && (
                    <p className="text-danger">Por favor, introduzca un número válido</p>
                )}

                <div className="input-group col-sm-6 mb-3">
                    <label for="parking" className="col-sm-4">Parking</label>
                    <input type="text" className={`form-control ${isNaN(parking) ? 'text-danger is-invalid': ''}`} name="parking" onChange={e => setParking(e.target.value)} value={parking} />
                    <div className="input-group-append">
                        <span className="input-group-text">$</span>
                    </div>
                    <span className="ml-3">A pagar:</span>
                </div>
                {isNaN(parking) && (
                    <p className="text-danger">Por favor, introduzca un número válido</p>
                )}
            </div>
        </div>
    );
};
export default Form;
