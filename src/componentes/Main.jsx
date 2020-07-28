import React from 'react'
import './Main.css'
import Promo from '../destaques/Promocao'
import Novidades from '../destaques/UltimosAdd'
import Mais from '../destaques/MaisVistos'

export default props => {
    return (
        <div>
            <Promo />
            <Novidades />
            <Mais />
        </div>
    )
}
