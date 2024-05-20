import './components-styles/Hamburgueres.css'
import React from 'react'
import Cards from './Cards'
import HomeSection from './HomeSection'

export default function Hamburgueres({setCartItems, cardapio, setModalGeralShow, setModalGeralText}){

    const cardapio_hamburguer = cardapio.hamburguer

    return (
        <div className='Hamburgueres'>


            <HomeSection>
                <h1 className='box-title'>HAMBURGUERES</h1>
                <Cards setModalGeralShow={setModalGeralShow} setModalGeralText={setModalGeralText} cardapio={cardapio_hamburguer} setCartItems={setCartItems} />
            </HomeSection>


        </div>
    )
}