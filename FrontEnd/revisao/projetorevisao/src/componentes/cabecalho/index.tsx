
import "../../estilo/estilo.css";
import { Link } from "react-router-dom";

function Cabecalho() {
    return(
        <div>
            <div className="cab_principal">

                <Link to='/'>
                    <div className="cab_menu">Home</div>
                </Link>

                <Link to='/quemsomos'>
                    <div className="cab_menu">Quem Somos</div>
                </Link>
            
            </div>
            
        </div>


    )
    
}

export default Cabecalho;