import './Header.css'
import React from 'react';
/*import iconoUsuario from '../public/iconoUsuario.svg'*/

export default function Header ({alternarLogin, setAlternarLogin}) {
    return(
        <header className='headerAdvise'>
            <div className='divClean'></div>
            <div className='divMessageNotOfficial'>
                <p>NOT AN OFFICIAL M***SHAKES WEBPAGE</p>
            </div>
            {/*
            <div className='divIconoProfile'>
                <button onClick={() => setAlternarLogin(!alternarLogin)}><img id='iconoProfile' src={iconoUsuario} alt="Icono de usuario" /></button>
            </div>
            */}
        </header>
    )
}