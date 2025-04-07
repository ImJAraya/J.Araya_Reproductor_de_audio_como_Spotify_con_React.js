import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faBackward,faForward } from "@fortawesome/free-solid-svg-icons";
import "../../styles/index.css"

import Boton from "../components/Boton";

const LayoutDeBotones = ()=>{
    return(
        <div className="controlButtons gap-3">
            <Boton icono={<FontAwesomeIcon icon={faBackward} />}/>
            <Boton icono={<FontAwesomeIcon icon={faPlay} />}/>
            <Boton icono={<FontAwesomeIcon icon={faForward} />}/>
        </div>
    )
}

export default LayoutDeBotones
