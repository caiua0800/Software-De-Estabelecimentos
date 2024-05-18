import React from 'react';
import './components-styles/Card.css'; 

export default function Card(props) {
    const { title, src, description, setCartItems, valor, setModalGeralText, setModalGeralShow} = props;


    const handleAddToCart = () => {
        setCartItems(prevItems => [...prevItems, { title, valor}]);
        setModalGeralText(`${title} adicionado no carrinho`);
        setModalGeralShow('ModalGeral');

        setTimeout(() => {
            setModalGeralShow('d-none')
        },1000)
    };

    return (
        <div className='Card'>
            
            <div className='card-face'>
                <img alt='img' src={src} />
            </div>
            <div className='card-body'>
                <div>
                    <h2 className='card-title'>{title}</h2>
                    <p className='card-description'>
                        {description}
                    </p>
                </div>

                <div className='btn-area'>
                    <h4>R${valor}</h4>
                    <button onClick={handleAddToCart}>Add</button>
                </div>
            </div>
        </div>
    );
}
