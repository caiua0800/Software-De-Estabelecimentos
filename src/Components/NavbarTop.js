import './components-styles/NavbarTop.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavbarTop(){

    const [showNav, setSowNav] = useState('d-none');

    const handleShowNav = () => {
        if(showNav === 'drop-menu')
            setSowNav('d-none')
        else setSowNav('drop-menu');
    }



    return (
        <div className='NavbarTop'>
            <button onClick={handleShowNav} className='btn-dropdown'><img src='https://firebasestorage.googleapis.com/v0/b/fagner-rangel.appspot.com/o/menu.png?alt=media&token=e064e0c4-73dc-4d8c-aafe-dacfdad5cec0'></img> </button>

            <div className={showNav}>
                <div className='nav-items'>
                    <Link onClick={handleShowNav} to='/' className='nav-item'>
                        <a>Home</a>
                    </Link>
                    <Link onClick={handleShowNav} to='/favorites' className='nav-item'>
                        <a>Favoritos</a>
                    </Link>
                    <Link onClick={handleShowNav} to='/drink' className='nav-item'>
                        <a>Drinks</a>
                    </Link>
                    <Link onClick={handleShowNav} to='/hamburgueres' className='nav-item'>
                        <a>Hamburguers</a>
                    </Link>


                </div>
            </div>
        </div>
    )
}