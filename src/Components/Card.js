import React from 'react';
import './components-styles/Card.css'; 

export default function Card(props) {
    const { title, src, description, setCartItems } = props;

    const src2 = 'https://th.bing.com/th/id/R.0cbabe9bfaff8e144a49e6d322120eb2?rik=O0%2buTys3b7YoJw&pid=ImgRaw&r=0';

    const handleAddToCart = () => {
        setCartItems((prevItems) => [...prevItems, { title, src, description }]);
    };

    return (
        <div className='Card'>
            <div className='card-face'>
                <img alt='img' src={src2} />
            </div>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-description'>
                    {description}
                </p>
                <div className='btn-area'>
                    <button onClick={handleAddToCart}>Add</button>
                </div>
            </div>
        </div>
    );
}
