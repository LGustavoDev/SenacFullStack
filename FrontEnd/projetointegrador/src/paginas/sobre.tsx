import React from "react";
import { Link, useParams } from "react-router-dom";


function Sobre() {
    const parametro = useParams()

    return(

        <div>
           essa é a minha pagina sobre nos
           <br />
           Meu parametro é:{parametro.teste}
           <ul>
            <li> <Link to="/">Home</Link></li>
           </ul>

        </div>
    )
    
}

export default Sobre