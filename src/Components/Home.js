import './components-styles/Home.css'
import React from 'react'
import Cards from './Cards'

export default function Home({ setCartItems , setCallHelp }){

    const handleCallHelp = () => {
        setCallHelp(true);

        setTimeout(() => {
            setCallHelp(false)
        }, 2000)
    }

    const estabelecimentoImg = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/estabelecimentoImg.jpeg?alt=media&token=cd4fd6c3-cc46-4526-b1ec-ee56aaef9b1e';

    return (
        <div className='Home'>
            <div className='Home-section'>
                <div>
                    <img src={estabelecimentoImg} />
                </div>
            </div>
        </div>
    )
}