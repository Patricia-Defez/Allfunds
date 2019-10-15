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
                toPay = (((n - 100) * 0.08) + 12).toFixed(2)
            }
        }
        return toPay;
    };

    function payingMeal (n){
        let toPay = 0
        if (!isNaN(n)){
            n = Math.floor(n)
            if (n <= 3){
                toPay = n * 10
            } else {
                toPay = (((n - 3) * 6) + 30).toFixed(2)
            }
        }
        return toPay;
    };

    function payingParking (n) {
        let toPay = 0
        if (!isNaN(n)){
            if (n <= 20){
                toPay = n * 1 
            } else {
                toPay = (((n - 20) * 0.50) + 20).toFixed(2)
            }
        }
        return toPay;
    };


    
    const toPayTransp = payingTransp(transportation)
    const toPayMeal = payingMeal(meal)
    const toPayParking = payingParking(parking)
    const toPayTotal = (toPayTransp * 1) + (toPayMeal * 1) + (toPayParking * 1)
  

    return (
        

        <div className="box mx-auto p-5">
        <div className="container  p-5">
            <div className=" mx-auto m-5 p-5 ">
                <div className="input-group  mb-3">
                    <label for="transportation" className="col-sm-2">Desplazamientos</label>
                    <input type="text" className={`form-control ${isNaN(transportation) ? 'text-danger is-invalid': ''}`} name="transportation" value={transportation} onChange={e => setTransportation(e.target.value)}/>
                    <div className="input-group-append">
                        <span className="input-group-text">Kms</span>
                    </div>
                    <span className="col-sm-2 ml-3 text-right">A pagar: { toPayTransp } $</span>
                </div>
                {isNaN(transportation) && (
                    <p className="text-danger">Por favor, introduzca un número válido</p>
                )}
                
                <div className="input-group  mb-3">
                    <label for="meal" className="col-sm-2 col-form-label">Nº de comidas</label>
                    <input type="text" className={`form-control ${isNaN(meal) ? 'text-danger is-invalid': ''}`} name="meal" onChange={e => setMeal(e.target.value)} value={meal} />
                    <span className="col-sm-2 ml-3 text-right">A pagar: { toPayMeal } $</span>
                </div>
                {isNaN(meal) && (
                    <p className="text-danger">Por favor, introduzca un número válido</p>
                )}

                <div className="input-group  mb-3">
                    <label for="parking" className="col-sm-2">Parking</label>
                    <input type="text" className={`form-control ${isNaN(parking) ? 'text-danger is-invalid': ''}`} name="parking" onChange={e => setParking(e.target.value)} value={parking} />
                    <div className="input-group-append">
                        <span className="input-group-text">$</span>
                    </div>
                    <span className="col-sm-2 ml-3 text-right">A pagar: { toPayParking } $</span>
                </div>
                {isNaN(parking) && (
                    <p className="text-danger">Por favor, introduzca un número válido</p>
                )}
                <div className="text-right font-weight-bold">Total a pagar: { toPayTotal } $</div>

            </div>
            </div>
        </div>
    );
};
export default Form;
