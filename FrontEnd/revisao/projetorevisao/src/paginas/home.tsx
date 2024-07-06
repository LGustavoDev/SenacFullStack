import Cabecalho from "../componentes/cabecalho";
import Quadrado from "../componentes/quadrado";
import "../estilo/estilo.css"

function Home() {
    return(

        <div>

            <Cabecalho/>
            <div>
                Corpo da pagina Home
                <Quadrado/>
                <br />
                <Quadrado/>
            </div>

        </div>
    )
}

export default Home;