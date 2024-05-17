import './components-styles/Favorites.css'
import React from 'react'
import Cards from './Cards'

export default function Favorites( {setCartItems}){

    return (
        <div className='Favorites'>
            <div className='drinks home-section'>
                <h1>DRINKS</h1>
                <Cards setCartItems={setCartItems} />

            </div>

            <div className='drinks home-section'>
                <h1>HAMBURGUERES</h1>
                <Cards setCartItems={setCartItems} />

            </div>

            <div className='drinks home-section'>
                <h1>HOT-DOGS</h1>
                <Cards setCartItems={setCartItems} />

            </div>
        </div>
    )
}