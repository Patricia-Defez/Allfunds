import React, { Component } from 'react';

const NUMBER_PATTERN = /^\d*$/;

const validations = {
    data: (value) => {
        let message;
        if(!NUMBER_PATTERN.test(value)) message = 'Por favor, introduzca un número válido'
        return message;
    }

}
 const Form = () => {
     return (
        <div className="row mx-auto ">
            <div className="col-xs-12 col-sm-10 mx-auto mt-5">
                <div className = "input-group  col-sm-6 mb-3">
                    <label for="transportation" class="col-sm-4">Desplazamientos</label>       
                    <input type="text" readonly class="form-control" name="transportation" />
                    <div className="input-group-append">
                        <span className="input-group-text">Kms</span>
                    </div>
                   <span class="ml-3">A pagar:</span>
                </div>
                <div class="input-group col-sm-6 mb-3">
                    <label for="meal" class="col-sm-4 col-form-label">Nº de comidas</label>
                    <input type="number" class="form-control" name="meal"/> 
                    <span class="ml-3">A pagar:</span>
                </div>
                <div class = "input-group col-sm-6 mb-3">
                    <label for="parking" class="col-sm-4">Parking</label>       
                    <input type="text" readonly class="form-control" name="parking" />
                    <div class="input-group-append">
                        <span class="input-group-text">$</span>
                    </div>
                    <span class="ml-3">A pagar:</span>
                </div>
             </div>
        </div>
     );
 };
 export default Form;
