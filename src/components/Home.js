import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'


function Home (){

    return(
        <div>
            <Jumbotron>
                <h1>Valor.gg<small className = 'text-muted'> Local Match History </small></h1>
            </Jumbotron>
        </div>
    )

}
export default Home