import './components-styles/Pedidos.css'
import React from 'react'

export default function Pedidos({ pedidos }){

    let valorTotalMesa = 0;

    pedidos.forEach(pedido => {
        valorTotalMesa += pedido.valor;
    })

    return (
        <div className='Pedidos'>
            <div className='Pedidos-title'>
                <h1>PEDIDOS FEITOS</h1>
            </div>

            <div className='all-pedidos'>
                <div className='pedidos-list'>
                    {pedidos.map((obj, i) => (
                        <div className='Pedido' key={obj.title + ' - ' + i}>
                            <p className='Pedido-title'>{obj.title}</p>
                            <p className='Pedido-title'> - </p>
                            <p className='Pedido-valor'>R${obj.valor}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className='total-valor'>
                <span>VALOR TOTAL DA MESA: R${valorTotalMesa}</span>
                <button>PEDIR A CONTA</button>
            </div>
        </div>
    )
}