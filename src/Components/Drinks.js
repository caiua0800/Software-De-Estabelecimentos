import './components-styles/Drinks.css'
import React from 'react'
import Cards from './Cards'

export default function Drinks({setCartItems, cardapio}){

    const cardapio_drinks = cardapio.drink

    return (
        <div className='Drinks'>
            <div className='drinks home-section'>
                <h1>DRINKS</h1>
                <Cards cardapio={cardapio_drinks} setCartItems={setCartItems}/>
            </div>
        </div>
    )
}