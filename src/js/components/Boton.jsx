import React from "react";

const Boton = ({icono, onClick}) =>{
    return (
        <button type="button" className="btn btn-dark" onClick={onClick}>{icono}</button>
    )
}

export default Boton