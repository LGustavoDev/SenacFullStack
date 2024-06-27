import React from "react";
import { Link } from "react-router-dom";

function Notfound() {

    return(

        <div>
            Você digitou algo errado, verifique e tente novamente
            <ul>
            <li> <Link to="/">Voltar</Link></li>
            </ul>

        </div>
    )
    
}

export default Notfound