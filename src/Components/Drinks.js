import './components-styles/Drinks.css'
import React from 'react'
import Cards from './Cards'

export default function Drinks({setCartItems, cardapio}){

    const cardapio_drinks = cardapio.drink
    let cardapio_drinks2 = []

    cardapio_drinks.map((drink, i) => {
        if(!drink.alcool)
            cardapio_drinks2.push(drink)
    })

    return (
        <div className='Drinks'>
            <div className='drinks home-section'>
                <h1>DRINKS</h1>
                <Cards cardapio={cardapio_drinks} setCartItems={setCartItems}/>
            </div>

            <div className='drinks home-section'>
                <h1>NÃO ALCOÓLICOS</h1>
                <Cards cardapio={cardapio_drinks2} setCartItems={setCartItems}/>
            </div>
        </div>
    )
}