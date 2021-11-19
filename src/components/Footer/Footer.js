import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Megatlon</h1>
                <p>Red de clubes</p>
            </div>
            <div className="footer-contact">
                <h3>Contactos</h3>
                <p>Entrenemos Juntos!</p>
            </div>
            <div className="footer-redes">
                <div className="derechos">
                  © Todos los derechos reservados 2021
                </div>
                <div className="redes-links">
                   <a href="https://www.facebook.com/Megatlon/" target="_blank" rel="noreferrer">
                   <i className="fab fa-facebook-f"></i>
                   </a>
                   <a href="https://www.instagram.com/megatlon/" target="_blank" rel="noreferrer">
                   <i className="fab fa-instagram"></i>
                   </a>
                   <a href="https://www.youtube.com/channel/UCNU3ljQ8sKREQZpTv8mdM6w" target="_blank" rel="noreferrer">
                   <i class="fab fa-youtube"></i>
                   </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
