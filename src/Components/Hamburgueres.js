import './components-styles/Hamburgueres.css'
import React from 'react'
import Cards from './Cards'

export default function Hamburgueres({setCartItems}){

    return (
        <div className='Hamburgueres'>

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