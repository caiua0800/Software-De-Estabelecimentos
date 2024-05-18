import React from "react";
import './components-styles/CartModal.css';

export default function CartModal({ showModal, items, setCartItems, setShowModal, setPedidosList, valorTotal }) {

    const modalClass = showModal ? 'CartModal' : 'CartModal d-none';

    const handleCancel = () => {
        setShowModal(false);
    }

    const handleConfirm = () => {
        items.forEach(pedido => {
            setPedidosList((prevPedidos) => [...prevPedidos, pedido]);
        })
        setCartItems([])
        setShowModal(false);
    }

    return (
        <div className={modalClass}>
            <div className="items-do-pedido">
                <h1>PEDIDO</h1>
                <div className="items">
                    {items.map((item, i) => (
                        <h6 key={i}> - {item.title} R${item.valor}</h6>
                    ))}
                </div>

                <div className="button-modal-area">
                    <h4>R${valorTotal}</h4>
                    <button onClick={handleCancel} className="cancel">Cancelar</button>
                    <button onClick={handleConfirm} className="confirm">Confirmar</button>
                </div>
            </div>
        </div>
    );
}
