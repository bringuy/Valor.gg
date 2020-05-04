import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header(){

    return(
        
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
            <div className = 'container-fluid'>
                <span className = 'navbar-brand mb-0 '>Valor.gg</span>
                <button 
                        className = 'navbar-toggler' 
                        type = 'button' 
                        data-toggle = 'collapse' 
                        data-target = '#navbarResponsive'>
                            <span className = 'navbar-toggler-icon'></span>
                </button>
                <div className = 'collapse navbar-collapse' id = 'navbarNav'>
                    <ul className = 'navbar-nav'>
                        <l1 className = 'nav-item active'>
                            <a className = 'nav-link' href = '/'>Home</a>
                        </l1>
                        <l1 className = 'nav-item active'>
                            <a className = 'nav-link' href = '/Stats'>Peep Statistics</a>
                        </l1>
                        <l1 className = 'nav-item active'>
                            <a className = 'nav-link' href = '/AddingItem'>Add Match</a>
                        </l1>
                    
                    </ul>
                </div>
            </div>
        
        </nav>
        </Router>

    )

}

export default Header