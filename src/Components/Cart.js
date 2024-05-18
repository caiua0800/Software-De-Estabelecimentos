import './components-styles/Cart.css';
import React, { useState } from 'react';
import CartModal from './CartModal';

export default function Cart({ items, setCartItems, setPedidosList }) {

    let valorTotal = 0;
    const [showModal, setShowModal] = useState(false);

    items.forEach(item => {
        valorTotal += parseFloat(item.valor)
    })

    const handleDeleteItem = (indexToRemove) => {
        setCartItems(prevItems => prevItems.filter((_, index) => index !== indexToRemove));
    }

    const handlePedidoClick = () => {
        setShowModal(true);
    }


    

    return (
        <div className='Cart'>
            <CartModal setCartItems={setCartItems} setPedidosList={setPedidosList} valorTotal={valorTotal} setShowModal={setShowModal} showModal={showModal} items={items} />
            <ul className='cart-items'>
                <h1 className='title-pedidos'>Pedidos</h1>
                {items.length > 0 ? (
                    items.map((item, index) => (
                        <li className='cart-item' key={index}>
                            <h3>{item.title}</h3>
                            <button onClick={() => handleDeleteItem(index)}>X</button>
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
                <button onClick={handlePedidoClick}>Fazer Pedido</button>
            </div>
        </div>
    );
}
