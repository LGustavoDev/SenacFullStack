import React from "react";
import { Link } from "react-router-dom";


function Padrao() {

    return(

        <div>
            <h1>você viu</h1>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/sobre">Sobre</Link></li>
            </ul>

        </div>
    )
    
}

export default Padrao