import './components-styles/Home.css'
import React from 'react'
import Cards from './Cards'

export default function Home({setCartItems}){

    

    return (
        <div className='Home'>
            
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