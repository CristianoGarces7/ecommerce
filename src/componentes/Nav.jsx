import React from 'react'
import './Nav.css'

export default props => {
    return (
        <nav className="naveg">
            <div className="barNav">
                <button className="btn btn-light btn-lg" >Blusas</button>
                <button className="btn btn-light btn-lg">Camisetas</button>
                <button className="btn btn-light btn-lg">Saias</button>
                <button className="btn btn-light btn-lg">Calças</button>
                <button className="btn btn-light btn-lg">Bermudas</button>
                <button className="btn btn-light btn-lg">Calçados</button>
            </div>
        </nav>
    )
}