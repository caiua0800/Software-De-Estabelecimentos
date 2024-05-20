import './components-styles/Home.css'
import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom';

export default function Home({ setCartItems , setCallHelp }){

    const handleCallHelp = () => {
        setCallHelp(true);

        setTimeout(() => {
            setCallHelp(false)
        }, 2000)
    }

    const estabelecimentoImg = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/estabelecimentoImg.jpeg?alt=media&token=cd4fd6c3-cc46-4526-b1ec-ee56aaef9b1e';

    const cart = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/cart-removebg-preview.png?alt=media&token=9490e723-1427-4927-a444-1adab3fb1fef';

    const bill = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/bill-removebg-preview.png?alt=media&token=00b91709-d9b6-49e9-9074-4b5615d82505'

    return (
        <div className='Home'>
            <div className='Home-section'>
                <div>
                    <img src={estabelecimentoImg} />
                </div>
            </div>

            <div className='cart-bill  as-s'>

                <button onClick={handleCallHelp} className="call-help-home"><img src="https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/sino.png?alt=media&token=4661e25d-9110-4b75-8126-66c20ebdfbbf" /></button>
                

                <div className="cart-bill-secondary">
                    <Link to='/cart' className='nav-item'>
                        <button><img src={cart} /></button>
                    </Link>
                    <Link to='/pedidos' className='nav-item'>
                        <button><img src={bill} /></button> 
                    </Link>
                </div>

            </div>
        </div>
    )
}