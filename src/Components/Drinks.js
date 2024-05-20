import './components-styles/Drinks.css'
import React from 'react'
import Cards from './Cards'
import HomeSection from './HomeSection'

export default function Drinks({setCartItems, cardapio, setModalGeralText, setModalGeralShow}){

    const cardapio_drinks = cardapio.drink
    let cardapio_drinks2 = []

    cardapio_drinks.map((drink, i) => {
        if(!drink.alcool)
            cardapio_drinks2.push(drink)
    })

    return (
        <div className='Drinks'>

            <HomeSection>
                <h1 className='box-title'>DRINKS</h1>
                <Cards setModalGeralShow={setModalGeralShow} setModalGeralText={setModalGeralText} cardapio={cardapio_drinks} setCartItems={setCartItems}/>
            </HomeSection>

            <HomeSection>
                <h1>SEM ALCOÓL</h1>
                <Cards setModalGeralShow={setModalGeralShow} setModalGeralText={setModalGeralText} cardapio={cardapio_drinks2} setCartItems={setCartItems}/>
            </HomeSection>

        </div>
    )
}