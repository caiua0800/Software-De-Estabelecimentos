import './components-styles/Hamburgueres.css'
import React from 'react'
import Cards from './Cards'

export default function Hamburgueres({setCartItems, cardapio}){

    const cardapio_hamburguer = cardapio.hamburguer

    return (
        <div className='Hamburgueres'>


            <div className='drinks home-section'>
                <h1>HAMBURGUERES</h1>
                <Cards cardapio={cardapio_hamburguer} setCartItems={setCartItems} />

            </div>


        </div>
    )
}