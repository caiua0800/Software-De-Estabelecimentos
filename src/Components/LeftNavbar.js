import './components-styles/LeftNavbar.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function LeftNavbar(props) {
    const { title } = props;

    const shortURL = 'https://firebasestorage.googleapis.com/v0/b/restaurante-menu-5bad4.appspot.com/o/';
    const home_icon = shortURL + 'home-icon.png?alt=media&token=67bbf3b8-73b0-4647-b682-17b2d226069d';
    const emoticon_icon = shortURL + 'emoji-favoritos.png?alt=media&token=8d29c728-4ba1-415b-855b-f1689c6f8718';
    const drink_icon = shortURL + 'bebida.png?alt=media&token=e06ac7ee-fddd-40e3-beed-dc5b864d51b1';
    const food_icon = shortURL + 'hamburgue.png?alt=media&token=40430ae9-aba6-4d49-9a25-96df89df07de';

    const cart_icon = shortURL + 'shopping_cart_PNG38.png?alt=media&token=8c84a3ba-4fc6-4a60-b9b5-25d79557bbd0'

    const sino_icon = shortURL + 'sino.png?alt=media&token=4661e25d-9110-4b75-8126-66c20ebdfbbf';

    const [active, setActive] = useState('home');

    const handleNavLinkClick = (link) => {
        setActive(link);
    };

    return (
        <div className='LeftNavbar'>
            <div className='navbar'>
                <div className='navBrand'>
                    <h1>{title}</h1>
                </div>

                <div className='nav-items'>
                    <Link to="/home" className={active === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick('home')}>
                        <img className='menu-icon' alt='Home Icon' src={home_icon} />
                    </Link>
                    <Link to="/favorites" className={active === 'favorite' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick('favorite')}>
                        <img className='menu-icon' alt='Favorite Icon' src={emoticon_icon} />
                    </Link>
                    <Link to="/drink" className={active === 'drink' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick('drink')}>
                        <img className='menu-icon' alt="Drink Icon" src={drink_icon} />
                    </Link>
                    <Link to="/hamburgueres" className={active === 'food' ? 'nav-link active' : 'nav-link'} onClick={() => handleNavLinkClick('food')}>
                        <img className='menu-icon' alt="Food Icon" src={food_icon} />
                    </Link>
                </div>

                <div className='CART'>
                    <Link to="/cart" >
                        <img className='menu-icon cart-icon' src={cart_icon}></img>
                    </Link>
                </div>
                <div className='come-here'>
                    <img src={sino_icon}></img>
                </div>
            </div>
        </div>
    );
}
