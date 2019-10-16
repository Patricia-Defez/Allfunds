import React, { useState } from 'react';
import FormField from './FormField';



const Form = () => {

    const [transportation, setTransportation] = useState("");
    const [meal, setMeal] = useState("");
    const [parking, setParking] = useState("");

    
    function paying (n, limit, BFactor, SFactor) {
        let toPay = 0
        if (!isNaN(n)){
            if (n <= limit){
                toPay = n * BFactor
            } else {
                toPay = (((n - limit) * SFactor) + (n * BFactor)).toFixed(2)
            }
        }
        return toPay
    };    
    
    const toPayTransp = paying (transportation, 100, 0.12, 0.08)
    const toPayMeal = paying (meal, 3, 10, 6)
    const toPayParking = paying (parking, 20, 1, 0.5)
    const toPayTotal = (toPayTransp * 1) + (toPayMeal * 1) + (toPayParking * 1)
  
    return (
        <div className="box mx-auto p-5">
        <div className="container  p-5">
            <div className=" mx-auto m-5 p-5 ">
                <div className="row">
                    <FormField title="Desplazamientos" name="transportation" role="Kms" vari={toPayTransp}
                        value={transportation}
                        onChange={e => setTransportation(e.target.value)}/>                   
                </div> 
                <div className="row">
                    <FormField title="Nº de comidas" name="meal" role="" vari={toPayMeal}
                        value={meal}
                        onChange={e => setMeal(e.target.value)}/>
                </div> 
                <div className="row">
                    <FormField title="Parking" name="parking" role="$" vari={toPayParking}
                        value={parking}
                        onChange={e => setParking(e.target.value)}/>
                </div>
                <div className="text-right font-weight-bold">Total a pagar: { toPayTotal } $</div>    
            </div>
            </div>
        </div>
    );
};
export default Form;
