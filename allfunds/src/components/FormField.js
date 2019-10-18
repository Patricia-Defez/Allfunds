import React from 'react';

export default (props) => (
    <div className="input-group  mb-2">
        <label className="col-sm-2">{props.title}</label>
        <input 
            type={props.type || "text"}
            className={`form-control ${isNaN(props.value) ? 'text-danger is-invalid': ''}`} 
            name={props.name} 
            value={props.value} 
            onChange={props.onChange}/>
        <div className="input-group-append">
            <span className="input-group-text">{props.role}</span>
        </div>
        <span className="col-sm-2 ml-3 text-right" data-testid="partial-result">A pagar: {props.vari} $</span>
        {isNaN(props.value) && (
            <p className="text-danger">Por favor, introduzca un número válido</p>
        )}
    </div>
);
