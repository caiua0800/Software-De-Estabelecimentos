import './components-styles/Cart.css';
import React from 'react';

export default function Cart({ items, setCartItems }) {

    let valorTotal = 0;

    items.forEach(item => {
        valorTotal += parseFloat(item.valor)
    })

    const handleDeleteItem = (indexToRemove) => {
        setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
    }

    return (
        <div className='Cart'>
            <ul className='cart-items'>
                <h1>Pedidos</h1>
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <li className='cart-item' key={index}>
                            <h3>{item.title}</h3>
                            <button onClick={() => handleDeleteItem(index)}>Remover</button>
                        </li>
                    ))
                ) : (
                    <li>O carrinho está vazio.</li>
                )}
            </ul>

            <div className='values'>
                <h4>TOTAL: <span>R${valorTotal.toFixed(2)}</span></h4>
            </div>

            <div className='btn-area-cart'>
                {/* <div>
                    <h2>MÉTODO DE PAGAMENTO:</h2>
                    <select>
                        <option>Selecione</option>
                        <option>Cartão de Crédito</option>
                        <option>Cartão de Débito</option>
                        <option>Dinheiro</option>
                        <option>Pix</option>
                    </select>
                </div> */}
                <button>Fazer Pedido</button>
            </div>
        </div>
    );
}
