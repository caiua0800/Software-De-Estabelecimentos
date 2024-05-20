import './components-styles/Favorites.css'
import React from 'react'
import Cards from './Cards'
import HomeSection from './HomeSection'

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

            <h1 className='title-obj'>FAVORITOS DA CASA</h1>

            <HomeSection className="drinks">

                <h1 className='box-title'>DRINKS</h1>
                <Cards setModalGeralShow={setModalGeralShow} setModalGeralText={setModalGeralText} cardapio={drinks} setCartItems={setCartItems} />
            </HomeSection>

            <HomeSection className="drinks">
                <h1 className='box-title'>HAMBURGUERS</h1>
                <Cards setModalGeralShow={setModalGeralShow} setModalGeralText={setModalGeralText} cardapio={hamburgueres} setCartItems={setCartItems} />

            </HomeSection>
        </div>
    )
}