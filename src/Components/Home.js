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

    return (
        <div className='Home'>
            <div className='Home-section'>
                <button onClick={handleCallHelp} className='call-help'>CHAMAR GARÇON</button>
                <button className='call-bill'>PEDIR A CONTA</button>
            </div>
        </div>
    )
}