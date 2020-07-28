import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'

import Header from './componentes/Header'
import Nav from './componentes/Nav'
import Footer from './componentes/Footer'
import Main from './componentes/Main'


export default function (props) {
    return(
        <React.Fragment>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </React.Fragment>

    )
}