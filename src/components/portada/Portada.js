import React from 'react';
import './portada.css';
import megatlonVideo from '../../media/megatlonVideo.mp4';

const Portada = () => {
    return (
        <div className="portada-container">
         <video className="video"  src={megatlonVideo} autoPlay loop muted/>
          <h1>MEGATLON</h1>   
          <p>Red de Clubes</p>
        </div>
    )
}

export default Portada
