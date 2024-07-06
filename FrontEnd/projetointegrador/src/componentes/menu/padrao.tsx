import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"

type Principal = {
    titulo: String
}



function Padrao(valores: Principal) {

    return(


        <div>
            
        {valores.titulo}
        
            <h1>você viu</h1>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/sobre">Sobre</Link></li>
            </ul>

        </div>
    )
    
}

export default Padrao