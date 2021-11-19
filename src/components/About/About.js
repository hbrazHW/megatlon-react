import React from 'react'
import './About.css';
import megatlonPortada from '../../media/megatlonPortada.png'

const About = () => {
    return (
        <div className="about-container">
            <div className="description">
            <h3>Portal Megatlon</h3>
            <p>Administra sus casos, crea documentos legales y gestiona sus recursos humanos desde acá de manera practica y rápida</p>
            </div>
            <div className="about-img">
            <img  src={megatlonPortada} alt="fotoportada"/>
            </div>
        </div>
    )
}


export default About
