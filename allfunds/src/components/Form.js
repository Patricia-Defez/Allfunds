import React, { useState } from 'react';




const Form = () => {

    const [transportation, setTransportation] = useState("");
    const [meal, setMeal] = useState("");
    const [parking, setParking] = useState("");

    function payingTransp (n){
        let toPay = 0
        if (!isNaN(n)){
            if (n <= 100){
                toPay = n * 0.12
            } else {
                toPay = ((n - 100) * 0.08) + 12
            }
        }
        return toPay.toFixed(2);
    };

    function payingMeal (n){
        let toPay = 0
        if (!isNaN(n)){
            n = Math.floor(n)
            if (n <= 3){
                toPay = n * 10
            } else {
                toPay = ((n - 3) * 6) + 30
            }
        }
        return toPay.toFixed(2);
    };

    function payingParking (n) {
        let toPay = 0
        if (!isNaN(n)){
            n = Math.floor(n)
            if (n <= 20){
                toPay = n 
            } else {
                toPay = ((n - 20) / 2) + 20
            }
        }
        return toPay.toFixed(2);
    };
    
    const toPayTransp = payingTransp(transportation)
    const toPayMeal = payingMeal(meal)
    const toPayParking = payingParking(parking)
    const toPayTotal = (toPayTransp * 1) + (toPayMeal * 1) + (toPayParking * 1)
  

    return (
        

        <div className="row mx-auto ">
            <div className="col-xs-12 col-sm-10 mx-auto mt-5">
                <div className="input-group  col-sm-6 mb-3">
                    <label for="transportation" className="col-sm-4">Desplazamientos</label>
                    <input type="text" className={`form-control ${isNaN(transportation) ? 'text-danger is-invalid': ''}`} name="transportation" value={transportation} onChange={e => setTransportation(e.target.value)}/>
                    <div className="input-group-append">
                        <span className="input-group-text">Kms</span>
                    </div>
                    <span className="ml-3">A pagar: { toPayTransp } $</span>
                </div>
                {isNaN(transportation) && (
                    <p className="text-danger">Por favor, introduzca un número válido</p>
                )}
                
                <div className="input-group col-sm-6 mb-3">
                    <label for="meal" className="col-sm-4 col-form-label">Nº de comidas</label>
                    <input type="text" className={`form-control ${isNaN(meal) ? 'text-danger is-invalid': ''}`} name="meal" onChange={e => setMeal(e.target.value)} value={meal} />
                    <span className="ml-3">A pagar: { toPayMeal } $</span>
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
                    <span className="ml-3">A pagar: { toPayParking } $</span>
                </div>
                {isNaN(parking) && (
                    <p className="text-danger">Por favor, introduzca un número válido</p>
                )}
                <div className="">Total a pagar: { toPayTotal } $</div>

            </div>
        </div>
    );
};
export default Form;
