import './components-styles/Favorites.css'
import React from 'react'
import Cards from './Cards'

export default function Favorites( {setCartItems, cardapio,setModalGeralShow, setModalGeralText} ){

    let drinks = []
    let hamburgueres = []

    cardapio.drink.forEach(e => {
        if(e.fav)
            drinks.push(e);
    })

    cardapio.hamburguer.forEach(e => {
        if(e.fav)
            hamburgueres.push(e);
    })


    return (
        <div className='Favorites'>
            <div className='drinks home-section'>
                <h1>DRINKS</h1>
                <Cards setModalGeralShow={setModalGeralShow} setModalGeralText={setModalGeralText} cardapio={drinks} setCartItems={setCartItems} />

            </div>

            <div className='drinks home-section'>
                <h1>HAMBURGUERES</h1>
                <Cards setModalGeralShow={setModalGeralShow} setModalGeralText={setModalGeralText} cardapio={hamburgueres} setCartItems={setCartItems} />

            </div>

        </div>
    )
}