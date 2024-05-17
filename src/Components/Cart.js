import './components-styles/Cart.css'
import React from 'react'

export default function Cart(){

    return (
        <div className='Cart'>
            <ul className='cart-items'>
                <h1>Pedidos</h1>
                <li className='cart-item'>
                    Hamburguer
                </li>
                <li className='cart-item'>Drink </li>
                <li className='cart-item'>(2x) Budweiser Litrão</li>
                <li className='cart-item'>Hamburguer Premium </li>
                <li className='cart-item'>Hot-Dog</li>
            </ul>

            <div className='values'>
                <h4>TOTAL: <span>R$00,00</span></h4>
            </div>

            <div className='btn-area-cart'>
                <div>
                    <h2>MÉTODO DE PAGAMENTO:</h2>
                    <select>
                        <option>Selecione</option>
                        <option>Cartão de Crédito</option>
                        <option>Cartão de Débito</option>
                        <option>Dinheiro</option>
                        <option>Pix</option>
                    </select>
                </div>
                <button>Pedir a conta</button>
            </div>

        </div>
    )
}